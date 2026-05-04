import { Button, Heading, Text } from '@rafaumeu-ignite-ui/react'
import { useQuery } from '@tanstack/react-query'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { ArrowLeft, ChartBar } from 'phosphor-react'
import { api } from '@/lib/axios'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import type { MetricsResponse } from '@/pages/api/users/metrics.api'
import {
  Bar,
  BarGroup,
  BarLabel,
  BarValue,
  ChartContainer,
  ChartSection,
  ChartTitle,
  Container,
  EmptyState,
  Header,
  Navigation,
  StatCard,
  StatLabel,
  StatsGrid,
  StatValue,
} from './styles'

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()

  const { data: metrics, isLoading } = useQuery<MetricsResponse>({
    queryKey: ['userMetrics'],
    queryFn: async () => {
      const response = await api.get('/users/metrics')
      return response.data
    },
    enabled: session.status === 'authenticated',
  })

  if (isLoading) {
    return (
      <>
        <NextSeo title="Dashboard | Ignite Call" noindex />
        <Container>
          <Header>
            <Heading as="strong">Booking Analytics</Heading>
            <Text>Loading your metrics...</Text>
          </Header>
        </Container>
      </>
    )
  }

  const maxDayCount = Math.max(
    ...(metrics?.bookingsByDayOfWeek.map((d) => d.count) || [1]),
    1,
  )
  const maxHourCount = Math.max(
    ...(metrics?.bookingsByHour.map((h) => h.count) || [1]),
    1,
  )

  const activeHours = metrics?.bookingsByHour.filter((h) => h.count > 0) || []

  return (
    <>
      <NextSeo title="Dashboard | Ignite Call" noindex />
      <Container>
        <Navigation>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => router.push('/register/update-profile')}
          >
            <ArrowLeft />
            Back to Profile
          </Button>
        </Navigation>

        <Header>
          <Heading as="strong">
            <ChartBar style={{ marginRight: 8, verticalAlign: 'middle' }} />
            Booking Analytics
          </Heading>
          <Text>
            Track your scheduling performance. See when your bookings peak and
            optimize your availability.
          </Text>
        </Header>

        {metrics && metrics.totalBookings > 0 ? (
          <>
            <StatsGrid>
              <StatCard>
                <StatValue>{metrics.totalBookings}</StatValue>
                <StatLabel>Total Bookings</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>{metrics.busiestDay?.dayLabel || '—'}</StatValue>
                <StatLabel>
                  Busiest Day{' '}
                  {metrics.busiestDay
                    ? `(${metrics.busiestDay.count} bookings)`
                    : ''}
                </StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>
                  {metrics.busiestHour ? `${metrics.busiestHour.hour}:00` : '—'}
                </StatValue>
                <StatLabel>
                  Busiest Hour{' '}
                  {metrics.busiestHour
                    ? `(${metrics.busiestHour.count} bookings)`
                    : ''}
                </StatLabel>
              </StatCard>
            </StatsGrid>

            <ChartSection>
              <ChartTitle>Bookings by Day of Week</ChartTitle>
              <ChartContainer>
                {metrics.bookingsByDayOfWeek.map((day) => (
                  <BarGroup key={day.day}>
                    {day.count > 0 && <BarValue>{day.count}</BarValue>}
                    <Bar
                      style={{
                        height: `${(day.count / maxDayCount) * 120}px`,
                      }}
                    />
                    <BarLabel>{day.dayLabel}</BarLabel>
                  </BarGroup>
                ))}
              </ChartContainer>
            </ChartSection>

            {activeHours.length > 0 && (
              <ChartSection>
                <ChartTitle>Bookings by Time Slot</ChartTitle>
                <ChartContainer>
                  {activeHours.map((slot) => (
                    <BarGroup key={slot.hour}>
                      <BarValue>{slot.count}</BarValue>
                      <Bar
                        style={{
                          height: `${(slot.count / maxHourCount) * 120}px`,
                        }}
                      />
                      <BarLabel>{`${slot.hour}:00`}</BarLabel>
                    </BarGroup>
                  ))}
                </ChartContainer>
              </ChartSection>
            )}
          </>
        ) : (
          <EmptyState>
            <Text>
              No bookings yet. Share your scheduling link to start receiving
              appointments!
            </Text>
          </EmptyState>
        )}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return {
      redirect: {
        destination: '/register/connect-calendar',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
