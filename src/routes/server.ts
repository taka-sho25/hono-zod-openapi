import { OpenAPIHono } from "@hono/zod-openapi"
import { swaggerUI } from '@hono/swagger-ui'

import { generateOpenAPIDocument } from "../helper/openapi"
import { userApi } from "./users"

const app = new OpenAPIHono();


app.route("/users", userApi);
generateOpenAPIDocument(app)

app.doc('/swagger-docs', {
  openapi: '3.0.0',
  info: {
    version: '0.0.1',
    title: '',
  },
})
app.get(
  '/swagger',
  swaggerUI({
    url: '/swagger-docs',
  })
)

export default app;