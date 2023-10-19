const config = require("../config/config.js")
async function logout(req, res) {
    try {
        let username;
        try {
            username = req.body.username.toLowerCase();
        } catch (err) {
            res.status(400).json({ message: config.USERNAME_REQUIRED });
            return;
        }
        // if(!username) {
        //     res.status(400).json({message: config.USERNAME_REQUIRED});
        //     return;
        // }
        const tokenName = config.COOKIE.authCookieName + '/' + username;
        res.clearCookie(tokenName);
        // const token = req.cookies.tokenName;
        // console.log(token)
        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Logged out failed" });
    }
}

module.exports = {
    logout
}