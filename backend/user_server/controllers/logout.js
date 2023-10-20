const config = require("../config/config.js")
async function logout(req, res) {
    try {
        try {
            const username = req.body.username.replace(/\s/g, '').toLowerCase();
            const tokenName = config.COOKIE.authCookieName + '/' + username;
            res.clearCookie(tokenName);
            res.status(200).json({ message: "Logged out successfully" });
        } catch (err) {
            res.status(400).json({ message: config.USERNAME_REQUIRED });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Logged out failed" });
    }
}

module.exports = {
    logout
}