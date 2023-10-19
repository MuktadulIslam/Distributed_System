const { body } = require("express-validator");
const { validationHandler } = require("./validationHandler.js");
const { isEmailExists } = require("../repository/database.js");
const config = require('../config/config.js')

const registrationValidator = [
    body("username").trim().notEmpty().withMessage(config.USERNAME_REQUIRED),
    body("email")
        .trim()
        .notEmpty()
        .withMessage(config.EMAIL_REQUIRED)
        .isEmail()
        .withMessage(config.VALID_EMAIL_REQUIRED)
        .custom(async (email) => {
            try {
                const exists = await isEmailExists(email);
                if (exists) {
                    throw new Error(config.DUPLICATE_EMAIL);
                }
                return true;
            } catch (err) {
                throw new Error(err.message);
            }
        }),
    body("password").trim().notEmpty().withMessage(config.PASSWORD_REQUIRED),
    validationHandler
];

const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage(config.EMAIL_REQUIRED)
        .isEmail()
        .withMessage(config.VALID_EMAIL_REQUIRED)
        .custom(async (email) => {
            try {
                const exists = await isEmailExists(email);
                if (!exists) {
                    throw new Error(config.EMAIL_NOT_FOUND);
                }
            } catch (err) {
                throw new Error(err.message);
            }
        }),
    body("password").trim().notEmpty().withMessage(config.PASSWORD_REQUIRED),
    validationHandler
];

module.exports = {
    registrationValidator,
    loginValidator,
};