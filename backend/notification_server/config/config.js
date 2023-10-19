const PORT_NUMBER = 5003;
const NOTICATION_DATABASE = "notificationDB";
const NOTICATION_TABLE = "notifications";
const DUPLICATE_EMAIL = "Email Already Exists";
const EMAIL_NOT_FOUND = "Email Doesn't Exists";
const SERVER_ERROR = "Internal Server Error";
const USERNAME_REQUIRED = "Username must be provided";
const PASSWORD_REQUIRED = "Password must be provided";
const EMAIL_REQUIRED = "Email must be provided";
const VALID_EMAIL_REQUIRED = "Must be provide a valid email";
const COOKIE = {
    expiryTime: 2*24*60*60,
    authCookieName: "miniLinkedInAuthCookie",
    secret: "hello world"
}

module.exports = {
    PORT_NUMBER, 
    NOTICATION_DATABASE,
    NOTICATION_TABLE, 
    DUPLICATE_EMAIL, 
    EMAIL_NOT_FOUND, 
    SERVER_ERROR,
    USERNAME_REQUIRED,
    PASSWORD_REQUIRED,
    EMAIL_REQUIRED,
    VALID_EMAIL_REQUIRED,
    COOKIE
}