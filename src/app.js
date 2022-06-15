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
app.use(express.static(path.join(__dirname, 'resources', 'css')))
app.use(
    express.static(
        path.join(__dirname, '..', 'node_modules', 'bootstrap-icons'),
    ),
)

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        helpers: {
            sum: (a, b) => a + b,
            icon: iconName => {
                iconName = iconName.toString()
                return new Handlebars.SafeString(
                    "<span class='glyphicon glyphicon-" +
                        iconName +
                        "'></span>",
                )
            },
        },
    }),
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

MongoDB.connect()

//init router
router(app)

export default app
