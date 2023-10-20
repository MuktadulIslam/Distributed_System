const { findByEmail } = require("../repository/database.js")
const {EMAIL_REQUIRED, SERVER_ERROR} = require ("../config/config.js")

async function sendNotification(req, res) {
    try {
        const email = req.query.email;
        if (email) {
            const notifications = await findByEmail(email);
            res.status(200).json(notifications);
        }
        else {
            res.status(400).json({ message: EMAIL_REQUIRED });
            return;
        }
    } catch (err) {
        res.status(500).json({ message: SERVER_ERROR });
    }
}

module.exports = {
    sendNotification
}