import {
  Button,
  CheckBox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@rafaumeu-ignite-ui/react'
import { Container, FormError, Header } from '../style'

import { api } from '@/lib/axios'
import { convertTimeStringToMinutes } from '@/utils/convert-time-string-to-minutes'
import { getWeekDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './style'
import { NextSeo } from 'next-seo'
import type { ComponentProps } from 'react'
type TextInputProps = ComponentProps<typeof TextInput>

const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .length(7)
    .transform(intervals => {
      return intervals.filter(interval => interval.enabled)
    })
    .refine(intervals => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana',
    })
    .transform(intervals => {
      return intervals.map(interval => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      intervals => {
        return intervals.every(
          interval =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes
        )
      },
      {
        message:
          'O horário de termino deve ser pelo menos 1 hora distante do início',
      }
    ),
})
type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>
export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TimeIntervalsFormInput>({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })
  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })
  const intervals = watch('intervals')
  const weekDays = getWeekDays({ short: true })
  const router = useRouter()
  async function handleSetTimeIntervals(data: TimeIntervalsFormInput) {
    const formData = timeIntervalsFormSchema.parse(data)
    
    await api.post('/users/time-intervals', {
      intervals: formData.intervals,
    })
    
    await router.push('/register/update-profile')
  }
  return (
    <>
      <NextSeo title="Selecione sua disponibilidade | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading as="strong">Quase lá</Heading>
          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
          </Text>
          <MultiStep size={4} currentStep={3} />
        </Header>
        <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
          <IntervalContainer>
            {fields.map((field, index) => {
              return (
                <IntervalItem key={field.id}>
                  <IntervalDay>
                    <Controller
                      name={`intervals.${index}.enabled`}
                      control={control}
                      render={({ field }) => {
                        return (
                          <CheckBox
                            onCheckedChange={checked =>
                              field.onChange(!!checked)
                            }
                            checked={!!field.value}
                          />
                        )
                      }}
                    />
                    <Text>{weekDays[field.weekDay]}</Text>
                  </IntervalDay>
                  <IntervalInputs>
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      disabled={!intervals[index].enabled}
                      {...(register(
                        `intervals.${index}.startTime`
                      ) as TextInputProps)}
                    />
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      disabled={!intervals[index].enabled}
                      {...(register(
                        `intervals.${index}.endTime`
                      ) as TextInputProps)}
                    />
                  </IntervalInputs>
                </IntervalItem>
              )
            })}
          </IntervalContainer>
          {errors.intervals && (
            <FormError size="sm">{errors.intervals.root?.message}</FormError>
          )}
          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </IntervalBox>
      </Container>
    </>
  )
}
