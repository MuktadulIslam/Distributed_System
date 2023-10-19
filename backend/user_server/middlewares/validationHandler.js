const { validationResult } = require("express-validator");
const config = require("../config/config.js")

async function validationHandler(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        let status = 400;
        let errorArray = errors.array();

        errorArray.forEach(error => {
            if (error.msg == config.SERVER_ERROR) status = 500;
            else if (error.msg == config.DUPLICATE_EMAIL) status = 409;
            else if (error.msg == config.EMAIL_NOT_FOUND) status = 401;
        });

        return res.status(status).json({ errors: errors.array() });
    }
    else {
        next()
    }
}

module.exports = { validationHandler };