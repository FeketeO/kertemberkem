const mongoose = require('mongoose');

const GardenSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    garden: {
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

module.exports = mongoose.model('Garden', GardenSchema);