import { queryClient } from '@/lib/react-query'
import '../lib/dayjs'
import { globalStyles } from '@/styles/globals'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          titleTemplate="IgniteCall | %s"
          defaultTitle="IgniteCall — Agendamento Online"
          description="Plataforma de agendamento com Google Calendar OAuth, Design System e CI/CD. Agende reuniões de forma descomplicada."
          canonical="https://ignitecall-app.vercel.app"
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://ignitecall-app.vercel.app',
            siteName: 'IgniteCall',
            title: 'IgniteCall — Agendamento Online',
            description: 'Plataforma de agendamento com Google Calendar OAuth e Design System.',
          }}
          twitter={{
            cardType: 'summary_large_image',
            title: 'IgniteCall — Agendamento Online',
            description: 'Plataforma de agendamento com Google Calendar OAuth e Design System.',
          }}
        />
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
    </QueryClientProvider>
  )
}
