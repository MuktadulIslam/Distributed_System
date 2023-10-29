const { getAllPost, findByPostID } = require("../repository/databaseCRUD.js");

async function sendAllPost(req, res) {
    try {
        let posts = await getAllPost();
        posts.reverse()
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: SERVER_ERROR });
    }
}

async function sendPost(req, res) {
    try {
        const postID = String(req.params.id);
        if (postID) {
            res.status(200).json(await findByPostID(postID));
        }
        else {
            res.status(400).json({ message: "Post ID required" });
        }
    } catch (err) {
        res.status(500).json({ message: SERVER_ERROR });
    }
}

module.exports = {
    sendPost, sendAllPost
}