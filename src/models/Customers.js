import mongoose, { Schema } from 'mongoose'

const CustomerSchema = new Schema({
    first_name: {
        type: String,
        minLength: [1, "'first_name' is too short!"],
        maxlength: 10,
        required: true,
    },
    last_name: {
        type: String,
        minlength: [1, "'last_name' is too short!"],
        maxlength: 10,
        required: true,
    },
    age: {
        type: Number,
        min: [1, "'age' should be in [1, 130]"],
        max: [130, "'age' should be in [1, 130]"],
        required: true,
    },
    createAt: {
        type: Date,
        createAt: Date.now,
    },
    updateAt: {
        type: Date,
        updateAt: Date.now,
    },
})

export default mongoose.model('Customers', CustomerSchema)
