import Customers from '../models/Customers'

class CustomersControllers {
    static async listCustomers(req, res, next) {
        let customers = []
        try {
            customers = await Customers.find()
        } catch (error) {
            console.error('[ERROR] - getCustomersController ' + error)
        }

        res.render('customers', { customers: customers })
    }
}

export { CustomersControllers }
