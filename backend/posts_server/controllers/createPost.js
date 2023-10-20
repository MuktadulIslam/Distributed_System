const config = require("../config/config.js")
async function createPost(req, res) {
    try {
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

module.exports = {
    createPost
}