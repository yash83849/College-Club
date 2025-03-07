const { Schema, model } = require('../connection');

const mySchema = new Schema({
    
    // user's full name
    name: {
        type: String,
    },

    // unique email address
    email: { 
        type : String, 
        unique: true,
        
     },

     // hashed password
    password: { 
        type : String, 
        required: true
     },

     // URL to profile image
    profilePicture: {
        type: String,
        default: ""
    },

    // user role
    role: {
        type: String,
        enum: ["admin", "Member"],
        default: "Member"
    },

    // club the user is part of
        clubs: [{
             type: String, 
             ref: "Club" 
            }],

    // clubs user has requested to join
    requests: [{
        type: String, 
        ref: "Club"
    }],

    // user creation timestamp
    createdAt: { 
        type: Date,
         default: Date.now 
        },

        updatedAt: {
            type: Date,
            default: Date.now
        }
});

module.exports = model('user', mySchema );

 