const { default: mongoose } = require('mongoose');
const { Schema, model } = require('../connection');

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    limit: {
        type: Number,
        required: false,
    },
    tags: {
        type: Array,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    id: {
        type: string,
    },
    creator: {
        type: String,
    },
    participants: {
        type: Array,
        required: false,
    },

});

module.exports = model('event', eventSchema);