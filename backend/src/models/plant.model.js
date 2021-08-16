const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latinName: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    waterDemand: {
        type: String,
        required: true
    },
    lightDemand: {
        type: String,
        required: true
    },
    soilDemand: {
        type: String,
        required: true
    },
    blooming: {
        type: String,
        required: true
    },
    lifeCycles: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    toxic: {
        type: String,
        required: true
    },
    evergreen: {
        type: String,
        required: true
    },
    url:  {
        type: String,
        required: true
    },
    
}, {
    timeStamps: true
});

module.exports = mongoose.model('Plant', PlantSchema);