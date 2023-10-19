const bcrypt = require('bcrypt');
const { findOneByEmail } = require("../repository/database.js")
const { setCookie, generateToken } = require('../config/tokenAndCookie.js');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await findOneByEmail(email);

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'System failed in password compare' });
            } else if (result) {
                setCookie(res, generateToken(user),user.username.replace(/\s/g, '').toLowerCase())
                res.status(200).json({ username: user.username, email: user.email });
            } else {
                res.status(401).json({ message: "Passwords do not match" });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'System failed in login' });
    }
}

module.exports = {
    login
}