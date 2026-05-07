import type { NextApiRequest, NextApiResponse } from 'next'
import spec from '../../../../openapi.json'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(spec)
}
