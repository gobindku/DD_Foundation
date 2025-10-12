const {Schema,model} = require("mongoose");

const contactSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    massage:{
        type: String,
        required: true

    }
})
const Contact = new model('contact', contactSchema);
module.exports = Contact;