const mongoose = require('mongoose');
const { USER_DATABASE } = require("../config/config.js")
const User = require("./model/User.js")

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:6001/'+USER_DATABASE);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function createOne(user) {
    try {
        const newUser = new User(user);
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred");
    }
}

async function isEmailExists(email) {
    try {
        const existedUser = await User.findOne({ email });
        if (existedUser) return true;
        else false;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while verifying email");
    }
}

async function findOneByEmail(email) {
    try {
        const existedUser = await User.findOne({ email });
        return existedUser;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting user information");
    }
}

module.exports = {
    connectToDatabase, createOne, isEmailExists, findOneByEmail
};