const mongoose = require('mongoose');
const { POST_DATABASE, POST_DATABASE_URI } = require("../config/config.js")
const Post = require("./model/Post.js")

async function connectToDatabase() {
    try {
        await mongoose.connect(POST_DATABASE_URI + POST_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB Posts Database');
    } catch (error) {
        console.error('Error connecting to MongoDB Posts Database:', error);
    }
}

async function createOne(post) {
    try {
        const newPost = new Post(post);
        await newPost.save();
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred in post creation");
    }
}

async function findByPostID(postID) {
    try {
        const post = await Post.find({ postID }).select({ _id: 0 });
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting post information");
    }
}

async function getAllPost() {
    try {
        const posts = await Post.find({}).select({ _id: 0 });
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while all posts");
    }
}

module.exports = {
    connectToDatabase, createOne, findByPostID, getAllPost
};