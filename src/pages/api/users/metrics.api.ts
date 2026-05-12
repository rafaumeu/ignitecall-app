import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

export interface MetricsResponse {
  totalBookings: number
  bookingsByDayOfWeek: { day: number; dayLabel: string; count: number }[]
  bookingsByHour: { hour: number; count: number }[]
  busiestDay: { dayLabel: string; count: number } | null
  busiestHour: { hour: number; count: number } | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const userId = session.user.id

  const totalBookings = await prisma.scheduling.count({
    where: { user_id: userId },
  })

  const bookingsByDayOfWeek = await prisma.scheduling.groupBy({
    by: ['date'],
    where: { user_id: userId },
    _count: { id: true },
  })

  const dayAggregated: Record<number, number> = {}
  const hourAggregated: Record<number, number> = {}

  for (const booking of bookingsByDayOfWeek) {
    const date = new Date(booking.date)
    const dayOfWeek = date.getDay()
    const hour = date.getHours()

    dayAggregated[dayOfWeek] =
      (dayAggregated[dayOfWeek] || 0) + booking._count.id
    hourAggregated[hour] = (hourAggregated[hour] || 0) + booking._count.id
  }

  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' })
  const dayLabels = Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((d) => d.substring(0, 3))

  const dayResult: { day: number; dayLabel: string; count: number }[] =
    Array.from(Array(7).keys()).map((day) => ({
      day,
      dayLabel: dayLabels[day],
      count: dayAggregated[day] || 0,
    }))

  const hourResult: { hour: number; count: number }[] = Array.from(
    Array(24).keys(),
  ).map((hour) => ({
    hour,
    count: hourAggregated[hour] || 0,
  }))

  const busiestDay = dayResult.reduce(
    (max, curr) => (curr.count > (max?.count || 0) ? curr : max),
    null as { day: number; dayLabel: string; count: number } | null,
  )

  const busiestHour = hourResult.reduce(
    (max, curr) => (curr.count > (max?.count || 0) ? curr : max),
    null as { hour: number; count: number } | null,
  )

  return res.status(200).json({
    totalBookings,
    bookingsByDayOfWeek: dayResult,
    bookingsByHour: hourResult,
    busiestDay: busiestDay && busiestDay.count > 0 ? busiestDay : null,
    busiestHour: busiestHour && busiestHour.count > 0 ? busiestHour : null,
  } satisfies MetricsResponse)
}
