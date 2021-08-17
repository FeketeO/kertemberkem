const mongoose = require('mongoose');

const HortusSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    plantList: {
        type: [],
        required: true
    },
    note: {
        type: String,
        required: false
    },
    url:  {
        type: String,
        required: false
    },
    
}, {
    timeStamps: true
});

module.exports = mongoose.model('Hortus', HortusSchema);