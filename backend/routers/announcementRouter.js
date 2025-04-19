const express = require('express');
const Announcement = require('../models/AnnouncementModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
require('dotenv').config();

const router = express.Router();

// Add a new announcement
router.post('/add', verifyToken, async (req, res) => {
    try {
        const { title, description, clubId } = req.body;

        // Create a new announcement
        const newAnnouncement = new Announcement({
            
        
            clubId,
            createdBy: req.user._id, // Extracted from the token
        });

        const savedAnnouncement = await newAnnouncement.save();
        res.status(201).json(savedAnnouncement);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create announcement' });
    }
});

// Get all announcements
router.get('/getall', async (req, res) => {
    try {
        const announcements = await Announcement.find().populate('clubId createdBy', 'name email');
        res.status(200).json(announcements);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch announcements' });
    }
});

// Get announcements by club ID
router.get('/getbyclub/:clubId', async (req, res) => {
    try {
        const { clubId } = req.params;
        const announcements = await Announcement.find({ clubId }).populate('createdBy', 'name email');
        res.status(200).json(announcements);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch announcements for the club' });
    }
});

// Delete an announcement by ID
router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure only the creator can delete the announcement
        const announcement = await Announcement.findById(id);
        if (!announcement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }

        if (announcement.createdBy.toString() !== req.user._id) {
            return res.status(403).json({ error: 'You are not authorized to delete this announcement' });
        }

        await Announcement.findByIdAndDelete(id);
        res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete announcement' });
    }
});

// Update an announcement by ID
router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Ensure only the creator can update the announcement
        const announcement = await Announcement.findById(id);
        if (!announcement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }

        if (announcement.createdBy.toString() !== req.user._id) {
            return res.status(403).json({ error: 'You are not authorized to update this announcement' });
        }

        const updatedAnnouncement = await Announcement.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        res.status(200).json(updatedAnnouncement);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update announcement' });
    }
});

module.exports = router;