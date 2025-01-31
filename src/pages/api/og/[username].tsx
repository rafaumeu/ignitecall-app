import { ImageResponse } from '@vercel/og'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'edge',
}

const ImageComponent = ({ username }: { username: string }) => (
  <div
    style={{
      fontSize: '50px',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    {`Olá, ${username}!`}
  </div>
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query

  const image = new ImageResponse(
    <ImageComponent username={username as string} />
  )

  return image
}
