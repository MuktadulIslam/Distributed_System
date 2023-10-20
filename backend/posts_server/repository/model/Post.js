const mongoose = require('mongoose');
const { POSTS_TABLE } = require("../../config/config.js")

const postSchema = new mongoose.Schema({
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
    article: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
    
}, { versionKey: false });

const Post = mongoose.model(POSTS_TABLE, postSchema);

module.exports = Post;
