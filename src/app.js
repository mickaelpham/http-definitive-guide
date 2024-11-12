import express from 'express'
import expressBasicAuth from 'express-basic-auth'
import { pinoHttp } from 'pino-http'
import { logger } from './logger.js'

export const app = express()

app.use(pinoHttp({ logger }))

app.use(expressBasicAuth({
  users: {
    mcpham: 'verysecret',
    athomas: 'normal',
  },
  challenge: true,
},
))

app.use(express.static('public'))
