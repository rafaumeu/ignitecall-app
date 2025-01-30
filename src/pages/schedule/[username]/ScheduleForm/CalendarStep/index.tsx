import { useEffect, useState } from 'react'
import { Calendar } from '../../../../../components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerItem,
} from './styles'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)
  const router = useRouter()
  const username = String(router.query.username)
  const isDateSelected = !!selectedDate
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }
    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then(response => {
        console.log(response.data)
      })
  }, [selectedDate, username])
  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
            <TimePickerList>
              <TimePickerItem>08:00</TimePickerItem>
              <TimePickerItem>09:00</TimePickerItem>
              <TimePickerItem>10:00</TimePickerItem>
              <TimePickerItem>11:00</TimePickerItem>
              <TimePickerItem>12:00</TimePickerItem>
              <TimePickerItem>13:00</TimePickerItem>
              <TimePickerItem>14:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>16:00</TimePickerItem>
              <TimePickerItem>17:00</TimePickerItem>
              <TimePickerItem>18:00</TimePickerItem>
            </TimePickerList>
          </TimePickerHeader>
        </TimePicker>
      )}
    </Container>
  )
}
