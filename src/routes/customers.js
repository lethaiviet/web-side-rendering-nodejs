import { Router } from 'express'
const router = Router()
import { CustomersControllers } from '../controllers/customersControllers'

/* GET home page. */
router.get('/', CustomersControllers.listCustomers)

export default router
