import { defineConfig } from 'orval'

export default defineConfig({
  ignitecall: {
    input: {
      target: './openapi.json',
    },
    output: {
      target: './src/lib/api/ignitecall-client.ts',
      client: 'axios',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './src/lib/api/axios-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
})
