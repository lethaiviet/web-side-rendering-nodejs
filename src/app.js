import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import router from './routes'
import MongoDB from './config/database'

import Handlebars from 'handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
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
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        handlebars: allowInsecurePrototypeAccess(Handlebars),
    }),
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/resources/views'))

MongoDB.connect()

//init router
router(app)

export default app
