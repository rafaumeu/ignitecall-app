import './env-config.ts'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'standalone',
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts'],
}

export default nextConfig
