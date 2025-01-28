import { Container, Header } from '../style'
import { Button, Text, Heading, MultiStep } from '@ignite-ui/react'

import { ArrowRight, Check } from 'phosphor-react'

import { z } from 'zod'
import { AuthError, ConnectBox, ConnectItem } from './style'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter no mínimo 3 caracteres' })
    .regex(/^([a-z\\-])+$/i, {
      message: 'O usuário deve ter apenas letras e hifens',
    })
    .transform(username => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
})
type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query?.error
  const isSignedIn = session.status === 'authenticated'
  async function handelConnectCalendar() {
    await signIn('google')
  }
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.{' '}
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handelConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se voce habilitou as
            permissões de acesso ao Google Calendar.
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
