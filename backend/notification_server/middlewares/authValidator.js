async function authValidator(req, res, next) {
    try {
        let username;
        try {
            const username = req.query.username.replace(/\s/g, '').toLowerCase();
            const tokenName = config.COOKIE.authCookieName + '/' + username;
            const token = req.cookies[cookieName];

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

module.exports = { authValidator };