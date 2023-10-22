const axios = require('axios');
const config = require("../config/config.js")

async function authValidator(req, res, next) {
    try {
        const username = req.query.username || req.body.username;
        if (username) {
            // If username exists, replace spaces and convert to lowercase
            const formattedUsername = username.replace(/\s/g, '').toLowerCase();
            const cookieName = config.COOKIE.authCookieName + '/' + formattedUsername;
            const token = req.cookies[cookieName];

            const response = await axios.post(`${config.AUTH_VALIDATION_API}`, { token });

            if (response.status == 200) {
                console.log("hello");
                next();
            } else {
                console.log("hello2");
                res.status(401).json({ message: 'User not available in the database' });
            }
        } else {
            console.log("hello3");
            res.status(400).json({ message: 'Username is required' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = { authValidator };