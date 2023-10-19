const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const { connectToDatabase } = require("./repository/database.js");

const authMiddleware = require("./middlewares/authMiddleware.js")
const { registeration } = require('./controllers/register.js');
const { login } = require('./controllers/login.js');
const { logout } = require('./controllers/logout.js');
const { userInfo } = require('./controllers/userInfo.js');
const authValidator = require('./middlewares/authValidator.js');
const { userAuthentication } = require("./controllers/userAuthentication.js")



const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3002'],
        credentials: true
    })
);


app.post("/register", authValidator.registrationValidator, registeration);
app.post("/login", authValidator.loginValidator, login);
app.delete("/logout", logout);
app.get("/profile/:username", authMiddleware.checkAuthentication, userInfo);
app.post("/authentication", userAuthentication);


connectToDatabase()
    .then(() => {
        app.listen(config.PORT_NUMBER, () => {
            console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
        });
    })
    .catch((error) => {
        console.error('Server startup error:', error);
    });

