import mongoose, { Schema } from 'mongoose'

const Customer = new Schema({
    first_name: {
        type: String,
        minlength: 1,
        maxlength: 10,
    },
    last_name: {
        type: String,
        minlength: 1,
        maxlength: 10,
    },
    age: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model('Customers', Customer)
