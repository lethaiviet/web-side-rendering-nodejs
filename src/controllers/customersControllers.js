import Customers from '../models/Customers'

class CustomersControllers {
    static listCustomers(req, res, next) {
        Customers.find()
            .then(customers => {
                const fieldsInput = ['first_name', 'last_name', 'age']
                return res.render('customers', { customers, fieldsInput })
            })
            .catch(next)
    }

    static listDeletedCustomers(req, res, next) {
        Customers.findDeleted()
            .then(customers =>
                res.render('customers-bin', { customers: customers }),
            )
            .catch(next)
    }

    static async addCustomers(req, res, next) {
        try {
            console.log('Got body:', req.body)
            await Customers.create(req.body)
            next()
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async deleteCustomer(req, res, next) {
        try {
            const id = req.params.id
            await Customers.deleteById(id)
            next()
        } catch (e) {
            res.status(400).json(e.message)
        }
    }
}

export { CustomersControllers }
