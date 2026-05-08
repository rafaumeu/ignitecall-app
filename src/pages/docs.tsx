import Head from 'next/head'
import type { ReactElement } from 'react'

/**
 * Swagger UI page served at /docs.
 *
 * We avoid importing `swagger-ui-react` at the module level because it pulls
 * in a large CSS bundle that is not compatible with Next.js SSR by default.
 * Instead we render a simple full-screen iframe that points to the
 * standalone Swagger UI HTML page.
 */
export default function DocsPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Ignite Call API Docs</title>
        <meta name="robots" content="noindex" />
      </Head>
      <iframe
        src="/api/docs/ui"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="API Documentation"
      />
    </>
  )
}
