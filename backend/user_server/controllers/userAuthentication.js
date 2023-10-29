const { decodeToken } = require('../config/tokenAndCookie.js');

async function userAuthentication(req, res) {
    try {
        try {
            const token = req.body.token;
            if(decodeToken(token)) {
                res.status(200).json({ message: 'User avilable in database' });
            }
            else {
                res.status(401).json({ message: 'User not avilable in database' });
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
