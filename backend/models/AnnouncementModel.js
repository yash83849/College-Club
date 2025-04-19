const { AnnouncementSchema, model, Types } = require('../connection');

const mySchema = new AnnouncementSchema({
    
    clubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club', // Reference to the Announcement model
        required: true,
    },
    announcementBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Announcement model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Announcement', mySchema);