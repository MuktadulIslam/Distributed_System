const jwt = require('jsonwebtoken');
const {JWT} = require("../config/config.js");
const { decodeToken } = require('../config/tokenAndCookie.js');

async function userAuthentication(req, res) {
    try {
        try {
            const token = req.body.token;
            if(decodeToken(token)) {
                res.status(200).json({ message: 'User avilable in database' });
            }
            else {
                res.status(500).json({ message: 'Internal server error' });
            }
        } catch (err) {
            res.status(400).json({ message: 'token mast be include' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {
    userAuthentication
};
