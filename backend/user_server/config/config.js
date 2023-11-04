const dotenv = require('dotenv').config();

const DUPLICATE_EMAIL = "Email Already Exists";
const EMAIL_NOT_FOUND = "Email Doesn't Exists";
const SERVER_ERROR = "Internal Server Error";
const USERNAME_REQUIRED = "Username must be provided";
const PASSWORD_REQUIRED = "Password must be provided";
const EMAIL_REQUIRED = "Email must be provided";
const VALID_EMAIL_REQUIRED = "Must be provide a valid email";

const PORT_NUMBER = Number(process.env.PORT_NUMBER) || 5001;
const USER_DATABASE = process.env.USER_DATABASE || "userDB";
const USER_TABLE = process.env.USER_TABLE || "users";
const USER_DATABASE_URI = process.env.USER_DATABASE_URI || 'mongodb://localhost:6001/';
const FRONTEND1 = process.env.FRONTEND1 || 'http://localhost:4000';
const FRONTEND2 = process.env.FRONTEND2 || 'http://localhost:80';

const JWT = {
    secretKey: "c9a892edd8c92308e8476126a9c0e14de0c0089f0cb451912c96743f0f51f30c65a9a8b8656f68a7f29e8815fee263d307b7d7c9b6324b40cad7a7bf6243cd91",
    expiryTime: 2*24*60*60
}
const COOKIE = {
    expiryTime: 2*24*60*60,
    authCookieName: "miniLinkedInAuthCookie",
    secret: "hello world"
}
module.exports = {
    PORT_NUMBER, 
    USER_DATABASE, 
    USER_TABLE, 
    DUPLICATE_EMAIL, 
    EMAIL_NOT_FOUND, 
    SERVER_ERROR,
    USERNAME_REQUIRED,
    PASSWORD_REQUIRED,
    EMAIL_REQUIRED,
    VALID_EMAIL_REQUIRED,
    JWT,
    COOKIE,
    FRONTEND1,
    FRONTEND2,
    USER_DATABASE_URI
}