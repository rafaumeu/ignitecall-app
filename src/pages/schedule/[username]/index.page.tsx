import { prisma } from '@/lib/prisma'
import { ScheduleForm } from '@/pages/schedule/[username]/ScheduleForm'
import { Avatar, Text } from '@rafaumeu-ignite-ui/react'
import { Heading } from '@rafaumeu-ignite-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Container, UserHeader } from './styles'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  const router = useRouter()
  const username = String(router.query.username)
  return (
    <>
      <NextSeo
        title={`Agendar com ${user.name} | Ignite Call`}
        openGraph={{
          title: `Agendar com ${user.name} | Ignite Call`,
          description: user.bio,
          url: `https://www.seusite.com/schedule/${username}`,
          images: [
            {
              url: user.avatarUrl,
              width: 1200,
              height: 630,
              alt: `imagem do perfil de ${user.name}`,
            },
          ],
        }}
      />
      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>
        <ScheduleForm />
      </Container>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userName = String(params?.username)
  const user = await prisma.user.findUnique({
    where: {
      username: userName,
    },
  })
  if (!user) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      user: {
        name: user.username,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
