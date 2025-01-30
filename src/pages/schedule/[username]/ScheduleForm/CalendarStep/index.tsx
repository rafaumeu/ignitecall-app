import { Calendar } from '../../../../../components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerItem,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true
  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira <span>23 de outubro</span>
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
              <TimePickerItem>19:00</TimePickerItem>
            </TimePickerList>
          </TimePickerHeader>
        </TimePicker>
      )}
    </Container>
  )
}
