import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()
  function handleClearSelectedDate() {
    setSelectedDateTime(null)
  }
  if (selectedDateTime) {
    return (
      <ConfirmStep
        onCancelConfirmation={handleClearSelectedDate}
        schedulingDate={selectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
