const {Schema, model } = require('mongoose');

const StarshipSchema = Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type: Array,
        default : [],
        required: true
    },
    cost_in_credits: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    max_atmosphering_speed:{
        type: Number,
        required: true
    },
    crew: {
        type: String,
        required: true
    },
    passengers: {
        type: Number
    },
    cargo_capacity: {
        type: Number,
        required: true
    },
    consumables:{
        type: String
    },
    hyperdrive_rating: {
        type: Number,
        required: true
    },
    MGLT: {
        type: Number,
        required: true
    },
    starship_class: {
        type: String,
        required: true
    },
    created:{
        type: Date,
        required: true
    },
    edited: {
        type: Date,
        required: true
    }
});

module.exports = model('Starship', StarshipSchema);

