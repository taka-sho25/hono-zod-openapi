import { z } from "@hono/zod-openapi"

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number()
}).openapi({
  example: {
    id: 1,
    name: '',
    age: 20,
  }
})
