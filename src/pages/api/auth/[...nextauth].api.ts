import NextAuth, { type NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
}

export default NextAuth(authOptions)
