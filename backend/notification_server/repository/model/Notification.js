const mongoose = require('mongoose');
const { NOTICATION_TABLE } = require("../../config/config.js")

const notificationSchema = new mongoose.Schema({
    postID: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    postTime: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
    
}, { versionKey: false });

const Notification = mongoose.model(NOTICATION_TABLE, notificationSchema);

module.exports = Notification;
