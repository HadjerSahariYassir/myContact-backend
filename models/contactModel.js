const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please add the contact email"],
    },
    phone: {
        type: String,
        required: [true, "plase add the contact phone number"],
    }
},
    { timestamps : true }
)

module.exports = mongoose.model('Contact', contactSchema)