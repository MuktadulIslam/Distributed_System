const { deleteByPostIDAndEmail } = require("../repository/databaseCRUD.js")
const {SERVER_ERROR} = require ("../config/config.js")

async function deleteNotification(req, res) {
    try {
        const [email, postID] = [req.body.email, req.body.postID];
        if (email && postID) {
            const deleteCount = await deleteByPostIDAndEmail(postID, email);
            if(deleteCount>0){
                res.status(200).json({ message: "Notification successfully deleted" });
            }
            else{
                res.status(400).json({ message: "Valid email and postID required" });
            }
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