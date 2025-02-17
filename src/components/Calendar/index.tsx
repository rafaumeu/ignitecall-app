import { CalendarContainer } from '@/components/Calendar/styles'
import { api } from '@/lib/axios'
import { getWeekDays } from '@/utils/get-week-days'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useMemo, useState } from 'react'
import {
  CalendarActions,
  CalendarBody,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

interface CalendarWeek {
  week: number
  days: Array<{ date: dayjs.Dayjs; disabled: boolean }>
}
type CalendarWeeks = CalendarWeek[]
interface CalendarProps {
  selectedDate: Date | null

  onDateSelected: (date: Date) => void
}
interface BlockedDates {
  blockedWeekDays: number[]
  blockedDates: number[]
}
export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => dayjs().set('date', 1))
  const shortWeekDays = getWeekDays({ short: true })
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')
  const router = useRouter()
  const username = String(router.query.username)
  const { data: blockedDates } = useQuery({
    queryKey: [
      'blockedDates',
      currentDate.get('year'),
      currentDate.get('month') + 1,
    ],
    queryFn: async () => {
      const response = await api.get<BlockedDates>(
        `/users/${username}/blocked-dates`,
        {
          params: {
            year: currentDate.get('year'),
            month: currentDate.get('month') + 1,
          },
        }
      )
      return response.data
    },
  })
  function handlePrevMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')
    setCurrentDate(previousMonthDate)
  }
  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')
    setCurrentDate(nextMonthDate)
  }
  const calendarWeeks = useMemo(() => {
    if (!blockedDates) {
      return []
    }
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })
    const firstWeekDay = currentDate.get('day')
    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()
    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth()
    )
    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })
    const calendarDays = [
      ...previousMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map(date => {
        return {
          date,
          disabled:
            date.endOf('day').isBefore(new Date()) ||
            blockedDates.blockedWeekDays.includes(date.get('day')) ||
            blockedDates.blockedDates.includes(date.get('date')),
        }
      }),
      ...nextMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
    ]
    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0
        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }
        return weeks
      },
      []
    )
    return calendarWeeks
  }, [currentDate, blockedDates])
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button
            type="button"
            onClick={handlePrevMonth}
            title="previous month"
          >
            <CaretLeft />
          </button>
          <button type="button" onClick={handleNextMonth} title="next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map(weekDay => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay
                        onClick={() => onDateSelected(date.toDate())}
                        disabled={disabled}
                      >
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
