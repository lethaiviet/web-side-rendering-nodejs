import Customers from '../models/Customers'

class CustomersControllers {
    static listCustomers(req, res, next) {
        Customers.find()
            .then(customers =>
                res.render('customers', { customers: customers }),
            )
            .catch(next)
    }

    static async addCustomers(req, res, next) {
        try {
            console.log('Got body:', req.body)
            const newCustomer = new Customers(req.body)
            await newCustomer.save()
            next()
        } catch (e) {
            res.status(400).json(e.message)
        }
    }
}

export { CustomersControllers }
