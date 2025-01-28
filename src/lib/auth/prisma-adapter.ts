import { prisma } from '@/lib/prisma'
import type { Adapter } from 'next-auth/adapters'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {},
    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        emailVerified: null,
        image: null,
        username: user.username,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByEmail(email) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      })

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        emailVerified: null,
        image: null,
        username: user.username,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByAccount({ providerAccountId, provider }) {},
    async updateUser(user) {},
    async deleteUser(userId) {},
    async linkAccount(account) {},
    async unlinkAccount({ providerAccountId, provider }) {},
    async createSession({ sessionToken, userId, expires }) {},
    async getSessionAndUser(sessionToken) {},
    async updateSession({ sessionToken }) {},
    async deleteSession(sessionToken) {},
    async createVerificationToken({ identifier, expires, token }) {},
    async useVerificationToken({ identifier, token }) {},
  }
}
