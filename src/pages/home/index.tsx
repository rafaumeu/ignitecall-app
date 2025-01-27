import { Container, Hero, Preview } from '@/pages/home/styles'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import previewImage from '../../assets/app-preview.png'
import { ClaimUserNameForm } from './components/ClaimUsernameForm/indext'
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          alt="Calendário simbolizando a aplicação em funcionamento"
          priority
        />
      </Preview>
    </Container>
  )
}
