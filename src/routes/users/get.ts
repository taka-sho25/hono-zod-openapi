import { createRoute, OpenAPIHono } from "@hono/zod-openapi"
import type { Context, Env } from "hono"

import { UserSchema } from "../../schemas/index"

export const userRoute = createRoute({
  tags: ["users"],
  method: "get",
  path: "/",
  request: {},
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: "user response",
    },
  },
})

export const userHandler = (c: Context) => {
  return c.json({
    id: 1,
    name: "user name",
    age: 20,
  }, 200)
}
