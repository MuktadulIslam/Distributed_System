const config = require("../config/config.js")
async function logout(req, res) {
    try {
        // do the stuffs in authService.logout if needed

        const tokenName = config.COOKIE.authCookieName
        res.clearCookie(tokenName);
        // const token = req.cookies.tokenName;
        // console.log(token)
        res.status(200).json({message: "Logged out successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Logged out failed"});
    }
}

module.exports = {
    logout
}