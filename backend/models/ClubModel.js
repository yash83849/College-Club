const { default: mongoose } = require('mongoose');
const { Schema, model } = require('../connection');

const mySchema = new Schema({
   
    // club name
    name: {
        type: String,
        required: true,
        
    }, 
    
    // short Description of the club
    description: { 
        type: String
     },

     //URL to the club logo/image
     clublogo: {
        type: String
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

    // club members
    members: {
        type: String,
    
    },

    // club events
    events: {
        type: String,
    },

    // club creation date
    createdAt: { type: Date, default: Date.now },

    updatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = model('club', mySchema);