const config = require("../config/config.js");
const { decodeToken } = require("../config/tokenAndCookie.js");
const {getAllUsers} = require("../repository/databaseCRUD.js")

async function userInfo(req, res) {
    try {
        const username = String(req.params.username).replace(/\s/g, '').toLowerCase();
        const cookieName = config.COOKIE.authCookieName+'/'+username;
        // const token = req.cookies[cookieName];
        const token = req.signedCookies[cookieName];

        res.status(200).json(decodeToken(token));
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

async function usersEmail(req, res) {
    try {
        const users = await getAllUsers();
        if(users) {
            const userEmails = [];
            users.forEach(user => {
                userEmails.push(user.email)
            });
            res.status(200).json(userEmails);
        }
        else {
            res.status(204).json({ message: "No  User Found" });
        }
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

module.exports = {
    userInfo, usersEmail
}