const config = require("../config/config.js")
const { v4: uuidv4 } = require('uuid');
const { createOne } = require("../repository/database.js")
const axios = require("axios")

async function createPost(req, res) {
    try {
        const authorName = req.body.authorName;
        const article = req.body.article;
        // const image_url = req.body.image_url;
        const image_url = "null";
        const postTime = new Date();
        const postID = uuidv4();

        await createOne({ postID: postID, authorName: authorName, postTime: postTime, article: article, image_url: image_url })
            .then(() => {
                const options = {
                    method: 'POST',
                    url: config.NOTIFICATION_API,
                    data: { authorName: authorName, postID: postID, postTime:  postTime}
                };

                axios.request(options).then((response) => {
                    console.log(response.data);
                    if (response.status === 200) {
                        res.status(200).json({ message: 'Notification Created' });
                    }
                    else {
                        res.status(400).json({ message: 'Notification creation failed' });
                    }
                }).catch(function (error) {
                    res.status(501).json({ message: 'Error occur in notification creation' });
                });
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({ message: 'Post creation failed' });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Post creation failed' });
    }
}

module.exports = {
    createPost
}