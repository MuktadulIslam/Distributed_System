const DUPLICATE_EMAIL = "Email Already Exists";
const EMAIL_NOT_FOUND = "Email Doesn't Exists";
const SERVER_ERROR = "Internal Server Error";
const USERNAME_REQUIRED = "Username must be provided";
const PASSWORD_REQUIRED = "Password must be provided";
const EMAIL_REQUIRED = "Email must be provided";
const VALID_EMAIL_REQUIRED = "Must be provide a valid email";

const PORT_NUMBER = Number(process.env.PORT_NUMBER) || 5003;
const NOTICATION_DATABASE = process.env.NOTICATION_DATABASE || "notificationDB";
const NOTICATION_TABLE = process.env.NOTICATION_TABLE || "notifications";
const NOTICATION_DATABASE_URI = process.env.NOTICATION_DATABASE_URI ||'mongodb://localhost:6003/';

const AUTH_VALIDATION_API = process.env.AUTH_VALIDATION_API || "http://localhost:5001/authentication";
const USERNAMES_API = process.env.USERNAMES_API || "http://localhost:5001/usersemail";
const FRONTEND1 = process.env.FRONTEND1 || 'http://localhost:4000';
const FRONTEND2 = process.env.FRONTEND2 || 'http://localhost:80';

const COOKIE = {
    expiryTime: 2 * 24 * 60 * 60,
    authCookieName: "miniLinkedInAuthCookie",
    secret: "hello world"
}

const day = 2;
const hour = 0;
const min = 0;
const sec = 0;
const MAC_NOTIFICATION_AGE = (day * 24 * 3600 + hour * 3600 + min * 60 + sec) * 1000;

module.exports = {
    PORT_NUMBER,
    NOTICATION_DATABASE,
    NOTICATION_TABLE,
    NOTICATION_DATABASE_URI,
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
    MAC_NOTIFICATION_AGE,
    FRONTEND1,
    FRONTEND2
}