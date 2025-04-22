const { Schema, model } = require('../connection');

const mySchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: { 
        type : String, 
        unique: true,
        required: true,
        
     },
    password: { 
        type : String, 
        required: true,
     },
    avatar : {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
        clubs: [{
             type: String, 
             ref: "Club" 
            }],
    createdAt: { 
        type: Date,
         default: Date.now 
        },
});

module.exports = model('user', mySchema );

 