const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({

    clubId: {
        type: Types.ObjectId,
        ref: 'Club', 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    announcementBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('announcement', mySchema);