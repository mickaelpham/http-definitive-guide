import process from 'node:process'
import pino from 'pino'

const options = process.env.NODE_ENV === 'production'
  ? {}
  : {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    }

export const logger = pino(options)
