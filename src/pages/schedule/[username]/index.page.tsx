import { prisma } from '@/lib/prisma'
import { ScheduleForm } from '@/pages/schedule/[username]/ScheduleForm'
import { Avatar, Text } from '@ignite-ui/react'
import { Heading } from '@ignite-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { Container, UserHeader } from './styles'
import { NextSeo } from 'next-seo'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}
export default function Schedule({ user }: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agendar com ${user.name} | Ignite Call`} />
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
