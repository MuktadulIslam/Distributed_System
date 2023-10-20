const config = require("../config/config.js")
async function sendPosts(req, res) {
    try {
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

async function sendPost(req, res) {
    try {
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

module.exports = {
    sendPost,sendPosts
}