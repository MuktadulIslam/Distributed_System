const config = require("../config/config.js");
const { decodeToken } = require("../config/tokenAndCookie.js");

async function userInfo(req, res) {
    try {
        const username = String(req.params.username).replace(/\s/g, '').toLowerCase();
        const cookieName = config.COOKIE.authCookieName+'/'+username;
        const token = req.cookies[cookieName];

        res.status(200).json(decodeToken(token));
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

module.exports = {
    userInfo
}