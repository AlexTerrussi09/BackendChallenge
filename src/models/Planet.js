const {Schema, model } = require('mongoose');

const PlanetSchema = Schema({
    name: {
        type: String,
        required: true
    },
    rotation_period: {
        type: Number,
        required: true
    },
    orbital_period: {
        type: Number,
        required: true
    },
    diameter: {
        type: Number,
        required: true
    },
    climate: {
        type: Array(String),
        default : []
    },
    gravity:{
        type: Number,
        required: true
    },
    terrain: {
        type: Array(String),
        default : [],
        required: true
    },
    surface_water: {
        type: Number,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default : Date.now
    },
    edited: {
        type: Date,
        default : Date.now
    }
});


module.exports = model('Planet', PlanetSchema);

