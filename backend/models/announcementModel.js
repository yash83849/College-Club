const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    
    clubId: {
        type: Types.ObjectId,
        ref: 'Club', // Reference to the Announcement model
        required: true,
    },
    announcementBy: {
        type: Types.ObjectId,
        ref: 'User', // Reference to the Announcement model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
});

module.exports = model('Announcement', mySchema);