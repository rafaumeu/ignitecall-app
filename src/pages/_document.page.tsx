     1|import { getCssText } from '@rafaumeu-ignite-ui/react'
     2|import { Head, Html, Main, NextScript } from 'next/document'
     3|
     4|export default function Document() {
     5|  return (
     6|    <Html lang="pt-br">
     7|      <Head>
        <link rel="me" href="https://github.com/rafaumeu" />
        <link rel="me" href="https://portfoliodev-blush-pi.vercel.app" />
        <meta name="author" content="Rafael Zendron" />
     8|        <link rel="preconnect" href="https://fonts.googleapis.com" />
     9|        <link
    10|          rel="preconnect"
    11|          href="https://fonts.gstatic.com"
    12|          crossOrigin="anonymous"
    13|        />
    14|        <link
    15|          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
    16|          rel="stylesheet"
    17|        />
    18|        <style id="stitches">{getCssText()}</style>
    19|        <script
    20|          src="https://cdn.counter.dev/script.js"
    21|          data-id="6db0ae4e-3992-4189-815b-2cbb7c5d6799"
    22|          data-utcoffset="-3"
    23|        />
    24|      </Head>
    25|      <body>
    26|        <Main />
    27|        <NextScript />
    28|      </body>
    29|    </Html>
    30|  )
    31|}
    32|