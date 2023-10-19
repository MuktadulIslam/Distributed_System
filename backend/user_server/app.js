const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const {connectToDatabase} = require("./repository/database.js");
const {va} = require("./middlewares/validationHandler.js")

const {registeration} = require('./controllers/register.js');
const login = require('./controllers/login.js');
// const logout = require('./controllers/logout.js');
// const userInfo = require('./controllers/userInfo.js');
const authValidator = require('./middlewares/authValidator.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser(config.COOKIE.secret));


app.post("/register", authValidator.registrationValidator, registeration);
app.post("/login", authValidator.loginValidator, login);
// app.delete("/logout", logout);
// app.get("/profile", authMiddleware.checkAuthentication, userInfo);

// app.post("/register",(req, res)=>{
//     res.send(["Response from register!!!!" ,req.body]);
// });
// app.post("/login",(req, res)=>{
//     res.send(["Response from login!!!!", req.body]);
// });
// app.delete("/logout",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from logout!!!!", "cookie=" + cookieHeader]);
// });
// app.get("/profile",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from profile!!!!", "cookie=" + cookieHeader]);
// });
// app.get("/",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from /!!!!", "cookie=" + cookieHeader]);
// });

app.listen(config.PORT_NUMBER, async () => {
    await connectToDatabase();
    console.log('User Server listening on port ' + config.PORT_NUMBER +'...');
});


