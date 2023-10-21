const axios = require('axios');
const { USERNAMES_API } = require("../config/config.js")
const { createOne } = require("../repository/database.js")
async function createNotification(req, res) {
    try {
        const postID = req.body.postID;
        const authorName = req.body.authorName;
        const postTime = req.body.postTime;

        const response = await axios.get(USERNAMES_API);
        console.log("\n\n\nhello\n\n\n");

        if (response.status === 200) {
            const alluserEmails = response.data;

            // Use a for...of loop to iterate and await each createOne operation
            for (const email of alluserEmails) {
                await createOne({
                    postID: postID,
                    authorName: authorName,
                    postTime: postTime,
                    user: email,
                });
            }
            res.status(200).json({ message: 'Notification Created' });
        }
        else {
            res.status(501).json({ message: 'Notification Not Created' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Notification creation failed' });
    }
}

module.exports = {
    createNotification
}