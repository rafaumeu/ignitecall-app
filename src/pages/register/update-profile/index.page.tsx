import { Button, TextArea, TextInput } from '@rafaumeu-ignite-ui/react'
import { MultiStep } from '@rafaumeu-ignite-ui/react'
import { Text } from '@rafaumeu-ignite-ui/react'
import { Heading } from '@rafaumeu-ignite-ui/react'

import { api } from '@/lib/axios'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { Container, Header } from '@/pages/register/style'
import {
  FormAnnotation,
  ProfileBox,
} from '@/pages/register/update-profile/styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar } from '@rafaumeu-ignite-ui/react'
import type { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { NextSeo } from 'next-seo'

const updateFormSchema = z.object({
  bio: z.string(),
})
type UpdateProfileFormData = z.infer<typeof updateFormSchema>
export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateFormSchema),
  })

  const session = useSession()

  const router = useRouter()
  async function handleUpdateProfile(data: UpdateProfileFormData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })
    await router.push(`/schedule/${session.data?.user.username}`)
  }
  return (
    <>
      <NextSeo title="Atualize seu perfil | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>
          <MultiStep size={4} currentStep={4} />
        </Header>
        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size="sm">Foto de perfil</Text>
            <Avatar
              src={session.data?.user.avatar_url}
              alt={session.data?.user.name}
              referrerPolicy="no-referrer"
            />
          </label>
          <label>
            <Text size="sm">Sobre você</Text>
            <TextArea {...register('bio')} />
            <FormAnnotation size="sm">
              Fale um pouco sobre você. Isto será exibido na sua página pessoal.
            </FormAnnotation>
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )
  return {
    props: {
      session,
    },
  }
}
