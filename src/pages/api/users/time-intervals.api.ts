import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )
  if (!session) {
    return res.status(401).end()
  }
  const {} = req.body
  return res.json({
    session,
  })
}
