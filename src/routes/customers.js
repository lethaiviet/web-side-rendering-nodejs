import { Router } from 'express'
import { CustomersControllers } from '../controllers/customersControllers'
import refreshPage from '../middleWares/refreshPage'

const router = Router()

//[GET] customers/
router.get('/', CustomersControllers.listCustomers)

//[GET] customers/bin
router.get('/bin', CustomersControllers.listDeletedCustomers)

//[GET] customers/:id
router.get('/:id', CustomersControllers.getCustomerById)

//[PUT] customers/
router.put('/', CustomersControllers.updateCustomer)

//[DELETE] customers/
router.delete('/', CustomersControllers.sortDeleteCustomer, refreshPage)

//[DELETE] customers/hard-delete
router.delete(
    '/hard-delete',
    CustomersControllers.hardDeleteCustomer,
    refreshPage,
)

//[POST] customers/
router.post('/', CustomersControllers.addCustomers)

export default router
