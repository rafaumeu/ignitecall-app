import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import Google, { type GoogleProfile } from 'next-auth/providers/google'

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res']
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            username: '',
            avatar_url: profile.picture,
          }
        },
      }),
    ],
    callbacks: {
      async signIn({ account }) {
        if (
          !account?.scope?.includes('https://www.googleapis.com/auth/calendar')
        ) {
          return '/register/connect-calendar/?error=permissions'
        }
        return true
      },
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOptions(req, res))
}
