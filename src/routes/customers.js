import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('hello')
    res.render('home', { title: 'Express' })
})

export default router
