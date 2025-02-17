import { getCssText } from '@rafaumeu-ignite-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style id="stitches">{getCssText()}</style>
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="6db0ae4e-3992-4189-815b-2cbb7c5d6799"
          data-utcoffset="-3"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
