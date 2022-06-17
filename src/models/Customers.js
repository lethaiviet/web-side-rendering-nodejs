import mongoose, { Schema } from 'mongoose'
import mongoose_delete from 'mongoose-delete'

const CustomerSchema = new Schema(
    {
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
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
)

CustomerSchema.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
})

CustomerSchema.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true
    next()
})

export default mongoose.model('Customers', CustomerSchema)
