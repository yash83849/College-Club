const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "false"
    },

    //URL to the club logo/image
    image: {
        type: String,
    },

    // type of club
    clubtype: {
        type: String,
        // enum: ["sports", "cultural", "Tech", "Music", "other"]
    },

    // club creator (admin)
    createdBy: {
        type: String,

    },
    
    members: [{
        type: Types.ObjectId,
        ref: 'user',
    }],


    // club events
    events: {
        type: String,
    },

    // club creation date
    createdAt: { type: Date, default: Date.now },


});

module.exports = model('club', mySchema);