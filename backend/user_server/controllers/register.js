const bcrypt = require('bcrypt');
const {createOne} = require("../repository/database.js");
const { setCookie, generateToken } = require('../config/tokenAndCookie.js');

async function registeration(req, res) {
    try {
        const user = req.body;
        if(user.lastname == null) user.lastname = "";
        user.password = await bcrypt.hash(user.password, 10);

        await createOne(user);

        setCookie(res, generateToken(user))
        res.status(200).json({username: user.username, email: user.email});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Registration failed' });
    }
}

module.exports ={registeration}
