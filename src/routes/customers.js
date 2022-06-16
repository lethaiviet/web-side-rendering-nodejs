import { Router } from 'express'
import { CustomersControllers } from '../controllers/customersControllers'
import refreshPage from '../middleWares/refreshPage'

const router = Router()

//[GET] customers/
router.get('/', CustomersControllers.listCustomers)

//[POST] customers/
router.post('/', CustomersControllers.addCustomers, refreshPage)

//[DELETE] customers/:id
router.delete('/:id', CustomersControllers.deleteCustomer, refreshPage)

export default router
