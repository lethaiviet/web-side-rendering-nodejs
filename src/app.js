import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import router from './routes'
import customersRouter from './routes/customers'

import { engine } from 'express-handlebars'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    }),
)
app.use(cookieParser())

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/resources/views'))

//init router
router(app)

export default app
