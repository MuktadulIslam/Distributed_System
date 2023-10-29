const mongoose = require('mongoose');
const { NOTICATION_DATABASE_URI,NOTICATION_DATABASE } = require("../config/config.js")
const Notification = require("./model/Notification.js")

async function connectToDatabase() {
    try {
        await mongoose.connect(NOTICATION_DATABASE_URI + NOTICATION_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB Notifications Database');
    } catch (error) {
        console.error('Error connecting to MongoDB Notifications Database:', error);
    }
}

async function createOne(notification) {
    try {
        const newNotification = new Notification(notification);
        await newNotification.save();
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred in notification creation");
    }
}

async function findByEmail(email) {
    try {
        const user = email;
        const notifications = await Notification.find({ user }).select({ _id: 0 });
        return notifications;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting notification information");
    }
}

async function deleteByPostIDAndEmail(postID, email) {
    try {
        const user = email;
        const deleteStatus = await Notification.deleteOne({ postID, user });
        return deleteStatus.deletedCount;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while deleting the notification");
    }
}

module.exports = {
    connectToDatabase, createOne, findByEmail, deleteByPostIDAndEmail
};