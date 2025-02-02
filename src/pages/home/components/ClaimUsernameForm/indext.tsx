import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@rafaumeu-ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'
import type { ComponentProps } from 'react'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter no mínimo 3 caracteres' })
    .regex(/^([a-z\\-])+$/i, {
      message: 'O usuário deve ter apenas letras e hifens',
    })
    .transform(username => username.toLowerCase()),
})
type TextInputProps = ComponentProps<typeof TextInput>

type ClaimUsernameFormSchema = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormSchema>({
    resolver: zodResolver(claimUsernameFormSchema),
  })
  const router = useRouter()
  async function handleClaimUsername(data: ClaimUsernameFormSchema) {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...(register('username') as TextInputProps)}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
