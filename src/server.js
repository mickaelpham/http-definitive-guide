import process from 'node:process'
import { app } from './app.js'
import { logger } from './logger.js'

const { HTTP_PORT } = process.env
if (!HTTP_PORT) {
  throw new Error('missing HTTP_PORT env var')
}

const port = Number.parseInt(HTTP_PORT)
if (Number.isNaN(port)) {
  throw new TypeError('HTTP_PORT is NaN')
}

app.listen(port, () => {
  logger.info({ port }, 'server started listening')
})
