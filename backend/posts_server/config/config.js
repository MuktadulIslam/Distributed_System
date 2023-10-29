const dotenv = require('dotenv').config();


const DUPLICATE_EMAIL = "Email Already Exists";
const EMAIL_NOT_FOUND = "Email Doesn't Exists";
const SERVER_ERROR = "Internal Server Error";
const USERNAME_REQUIRED = "Username must be provided";
const PASSWORD_REQUIRED = "Password must be provided";
const EMAIL_REQUIRED = "Email must be provided";
const VALID_EMAIL_REQUIRED = "Must be provide a valid email";

const PORT_NUMBER = Number(process.env.PORT_NUMBER) || 5002;
const POST_DATABASE = process.env.POST_DATABASE || "postDB";
const POSTS_TABLE = process.env.POSTS_TABLE || "posts";
const POST_DATABASE_URI = process.env.POST_DATABASE_URI || 'mongodb://localhost:6002/';

const AUTH_VALIDATION_API = process.env.AUTH_VALIDATION_API || "http://localhost:5001/authentication";
const USERNAMES_API = process.env.USERNAMES_API || "http://localhost:5001/usersemail";
const NOTIFICATION_API = process.env.NOTIFICATION_API || "http://localhost:5003/notification";
const FRONTEND = process.env.FRONTEND || 'http://localhost:4000';

const COOKIE = {
    expiryTime: 2*24*60*60,
    authCookieName: "miniLinkedInAuthCookie",
    secret: "hello world"
}

module.exports = {
    PORT_NUMBER, 
    POST_DATABASE,
    POSTS_TABLE, 
    DUPLICATE_EMAIL, 
    EMAIL_NOT_FOUND, 
    SERVER_ERROR,
    USERNAME_REQUIRED,
    PASSWORD_REQUIRED,
    EMAIL_REQUIRED,
    VALID_EMAIL_REQUIRED,
    COOKIE,
    AUTH_VALIDATION_API,
    USERNAMES_API,
    NOTIFICATION_API,
    FRONTEND,
    POST_DATABASE_URI
}