import { OpenAPIHono } from '@hono/zod-openapi';

import { userRoute, userHandler } from "./get"

export const userApi = new OpenAPIHono()

userApi.openapi(userRoute, userHandler)
