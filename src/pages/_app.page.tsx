import { queryClient } from '@/lib/react-query'
import '../lib/dayjs'
import { globalStyles } from '@/styles/globals'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          titleTemplate="Ignite Call | %s"
          description="A plataforma de agendamento descomplicada."
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
