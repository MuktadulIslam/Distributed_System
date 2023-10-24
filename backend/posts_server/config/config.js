const PORT_NUMBER = 5002;
const POST_DATABASE = "postDB";
const POSTS_TABLE = "posts";
const DUPLICATE_EMAIL = "Email Already Exists";
const EMAIL_NOT_FOUND = "Email Doesn't Exists";
const SERVER_ERROR = "Internal Server Error";
const USERNAME_REQUIRED = "Username must be provided";
const PASSWORD_REQUIRED = "Password must be provided";
const EMAIL_REQUIRED = "Email must be provided";
const VALID_EMAIL_REQUIRED = "Must be provide a valid email";
const AUTH_VALIDATION_API = "http://localhost:5001/authentication";
const USERNAMES_API = "http://localhost:5001/usersemail";
const NOTIFICATION_API = "http://localhost:5003/notification";
const COOKIE = {
    expiryTime: 2*24*60*60,
    authCookieName: "miniLinkedInAuthCookie",
    secret: "hello world"
}

const POSTS_BUCKET = "postimages"

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
    POSTS_BUCKET
}