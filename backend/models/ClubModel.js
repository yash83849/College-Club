const { default: mongoose } = require('mongoose');
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: {
        type: String,
        required: true,
        
    }, 
    description: { 
        type: String,
        required: true
     },
     adminId: {
        type: String,
        ref: 'Admin',
        required: true
     },
     members: {
        type: String,
        ref: 'User'
     },
     events: {
        type: String,
        ref: 'Event'
     },
     joinRequests: {
        type: String,
        ref: 'JoinRequest'
     },
     clubLogo: {
        type: String,
        required: false
     },
     clubImages: {
        type: String,
        required: false
     }, 

  

   
    // club creation date
    createdAt: { type: Date, default: Date.now },

    
});

module.exports = model('club', mySchema);