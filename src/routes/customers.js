import { Router } from 'express'
const router = Router()
import { CustomersControllers } from '../controllers/customersControllers'
import refreshPage from '../middleWares/refreshPage'

//[GET] customers/
router.get('/', CustomersControllers.listCustomers)

//[POST] customers/
router.post('/', CustomersControllers.addCustomers, refreshPage)
export default router
