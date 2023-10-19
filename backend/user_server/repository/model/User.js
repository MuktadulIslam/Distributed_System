const mongoose = require('mongoose');
const { USER_TABLE } = require("../../config/config.js")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false });

const User = mongoose.model(USER_TABLE, userSchema);

module.exports = User;
