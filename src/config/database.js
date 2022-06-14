import mongoose from 'mongoose'

class MongoDB {
    static async connect() {
        try {
            await mongoose.connect(
                'mongodb://localhost:27017/hotel_management_dev',
            )
            console.log('Connected to database successfully!!!')
        } catch (error) {
            console.log('Cannot connect to database!!!')
            console.log('ERROR: ' + error)
        }
    }
}

export default MongoDB
