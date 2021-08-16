const mongoose = require('mongoose');

const ShopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    url:  {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Shop', ShopSchema);