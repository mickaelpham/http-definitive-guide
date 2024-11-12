import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import express from 'express'
import { pinoHttp } from 'pino-http'
import { logger } from './logger.js'

export const app = express()

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(cookieSession({ name: 'session', keys: ['some-server-side-secret'] }))
app.use(pinoHttp({ logger }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    headers: req.headers,
    cookies: req.cookies,
    session: req.session,
  })
})

app.post('/name', (req, res) => {
  const { name } = req.body
  logger.info({ userName: name }, 'name received from request')
  req.session.name = name
  res.redirect('/')
})
