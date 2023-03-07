const mongoose = require('mongoose');

// fields definition
const fields = {
    name : {
        type : String,
        required: true
    },
    title : {
        type : String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('Product', schema);

module.exports = model;