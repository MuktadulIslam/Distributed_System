const jwt = require('jsonwebtoken');
const {JWT, COOKIE } = require('./config.js');

function generateToken(user) {
    const tokenData = {
        username: user.username,
        email: user.email
    }
    const token = jwt.sign(tokenData, JWT.secretKey, {
        expiresIn: JWT.expiryTime,
    });
    return token;
}
function decodeToken(token) {
    try{
    const secretKey = JWT.secretKey;
    const decoded = jwt.verify(token, secretKey);
    return {username: decoded.username, email:decoded.email}
    }catch(err) {
        return null;
    }
}

function setCookie(res, token, username) {
    res.cookie(COOKIE.authCookieName+'/'+username, token, {
        httpOnly: true,
        maxAge: COOKIE.expiryTime,
        // signed: true,
    });
    // res.cookie(COOKIE.authCookieName+'/'+username, "token")
}


module.exports = {
    setCookie,generateToken, decodeToken
}