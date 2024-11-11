import express from 'express'
import { pinoHttp } from 'pino-http'
import { logger } from './logger.js'

export const app = express()

app.use(pinoHttp({ logger }))
app.use(express.static('public'))
