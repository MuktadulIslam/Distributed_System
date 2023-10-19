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

function setCookie(res, token) {
    res.cookie(COOKIE.authCookieName, token, {
        httpOnly: true,
        maxAge: COOKIE.expiryTime,
        signed: true,
    });
}


module.exports = {
    setCookie,generateToken
}