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

    static async updateCustomer(req, res, next) {
        try {
            console.log(req.body)
            const _id = req.body._id
            await Customers.findOneAndUpdate({ _id }, req.body)
            res.status(200).json('Updated customer')
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async addCustomers(req, res, next) {
        try {
            console.log('Got body:', req.body)
            await Customers.create(req.body)
            res.status(200).json('Created customer')
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async hardDeleteCustomer(req, res, next) {
        try {
            const ids = req.body.ids
            await Customers.deleteMany({ _id: { $in: ids } })
            next()
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async sortDeleteCustomer(req, res, next) {
        try {
            const ids = req.body.ids
            await Customers.delete({ _id: { $in: ids } })
            next()
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async getCustomerById(req, res, next) {
        try {
            const _id = req.params.id
            const customer = await Customers.findOne({ _id })
            res.status(200).json(customer)
        } catch (e) {
            res.status(404).json(e.message)
        }
        next()
    }
}

export { CustomersControllers }
