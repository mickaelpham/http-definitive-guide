import process from 'node:process'
import express from 'express'
import expressBasicAuth from 'express-basic-auth'
import { pinoHttp } from 'pino-http'
import { logger } from './logger.js'
import { parseUsers } from './parse-users.js'

export const app = express()

app.use(pinoHttp({ logger }))

app.use(expressBasicAuth({
  users: parseUsers(process.env.REALM_USERS),
  challenge: true,
},
))

app.use(express.static('public'))
