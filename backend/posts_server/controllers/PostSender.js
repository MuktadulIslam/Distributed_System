const { getAllPost, findByPostID } = require("../repository/databaseCRUD.js");
const { minioClient, POSTS_BUCKET } = require('../config/minioClient.js')

async function sendAllPost(req, res) {
    try {
        let posts = await getAllPost();
        const postsWithImages = [];
        let length = posts.length;
        for (let i = 0; i < length; i++) {
            if (posts[i].image_url !== 'null') {
                const imageUrl = minioClient.protocol + '//' + minioClient.host + ':' + minioClient.port + '/' + POSTS_BUCKET + '/' + posts[i].image_url;
                posts[i].image_url = imageUrl;
            }
        }
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