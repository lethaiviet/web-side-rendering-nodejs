import usersRouter from './users'
import customersRouter from './customers'

function router(app) {
    app.use('/user', usersRouter)
    app.use('/customers', customersRouter)
}

export default router
