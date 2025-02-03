import { Heading, Text } from '@rafaumeu-ignite-ui/react'
import Image from 'next/image'
import previewImage from '../../assets/app-preview.png'

import { NextSeo } from 'next-seo'
import { Container, Hero, Preview } from './styles' 
import { ClaimUserNameForm } from '@/pages/home/components/ClaimUsernameForm' 

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
        openGraph={{
          title: "Descomplique sua agenda | Ignite Call",
          description: "Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.",
          images: [
            {
              url: previewImage.src,
              alt: 'Calendário simbolizando a aplicação em funcionamento',
            },
          ],
          url: 'https://www.ignitecall.com/home',
        }}
      />
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
    </>
  )
}
