const {Schema, model } = require('mongoose');

const FilmSchema = Schema({
    title: {
        type: String,
        required: true
    },
    episode_id: {
        type: Number,
        required: true
    },
    opening_crawl: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    release_date:{
        type: Date,
        required: true,
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

module.exports = model('Film', FilmSchema);

