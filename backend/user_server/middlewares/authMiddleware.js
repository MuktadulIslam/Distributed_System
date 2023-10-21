const jwt = require('jsonwebtoken');
const config = require("../config/config.js");

async function checkAuthentication(req, res, next) {
    try {
        const username = String(req.params.username).replace(/\s/g, '').toLowerCase();
        const cookieName = config.COOKIE.authCookieName+'/'+username;
        
        const secretKey = config.JWT.secretKey;
        const token = req.cookies[cookieName];
        console.log(token)
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Unauthorized Request' });
            } else {
                next()
            }
        });
    } catch (err) {
        res.status(500).json({ message: config.SERVER_ERROR });
    }
}
module.exports ={
    checkAuthentication,
};
