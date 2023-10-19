const mongoose = require('mongoose');
const { NOTICATION_DATABASE } = require("../config/config.js")
const Notification = require("./model/Notification.js")

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:6002/'+NOTICATION_DATABASE);
    console.log('Connected to MongoDB Notific');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
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

async function findOneByPostID(postID) {
    try {
        const existed = await Notification.findOne({ postID });
        return existed;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting notification information");
    }
}

module.exports = {
    connectToDatabase, createOne, findOneByPostID
};