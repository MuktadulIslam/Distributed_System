const axios = require('axios');
const config = require("../config/config.js")

async function authValidator(req, res, next) {
    try {
        try {
            const username = req.query.username.replace(/\s/g, '').toLowerCase();
            const cookieName = config.COOKIE.authCookieName + '/' + username;
            // const token = req.cookies[cookieName];
            const token = req.signedCookies[cookieName];
            const response = await axios.post(`${config.AUTH_VALIDATION_API}`, { token });
            if (response.status === 200) {
                next()
            }
            else {
                res.status(401).json({ message: 'User not avilable in database' });
                return;
            }

        } catch (err) {
            console.log(err)
            res.status(400).json({ message: config.USERNAME_REQUIRED });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}

module.exports = { authValidator };