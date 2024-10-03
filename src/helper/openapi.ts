import type { OpenAPIHono } from '@hono/zod-openapi'
import { writeFileSync } from 'node:fs'
import { stringify } from 'yaml'

export const generateOpenAPIDocument = (app: OpenAPIHono) => {
  const docs = app.getOpenAPIDocument({
    openapi: '3.0.0',
    info: {
      title: '',
      description: '',
      version: '0.0.1',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    tags: [
      {
        name: 'user',
        description: '',
      },
    ],
  });

  writeFileSync('docs/openapi.yaml', stringify(docs))
}
