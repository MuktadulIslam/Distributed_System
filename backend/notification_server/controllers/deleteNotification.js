const { deleteByPostIDAndUser } = require("../repository/database.js")
const {SERVER_ERROR} = require ("../config/config.js")

async function deleteNotification(req, res) {
    try {
        const [email, postID] = [req.body.email, req.body.postID]
        if (email && postID) {
            await deleteByPostIDAndUser(postID, email);
            res.status(200).json({ message: "Notification successfully deleted" });
        }
        else {
            res.status(400).json({ message: "email and postID required" });
            return;
        }
    } catch (err) {
        res.status(500).json({ SERVER_ERROR });
    }
}

module.exports = {
    deleteNotification
}