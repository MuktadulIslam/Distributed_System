const express = require("express");
const cors = require("cors");
const registeration = require('./controllers/register.js');
const cookieParser = require('cookie-parser');

// const login = require('./controllers/login.js');
// const logout = require('./controllers/logout.js');
// const userInfo = require('./controllers/userInfo.js');
// const authValidator = require('./middlewares/authValidator.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// app.post("/register", authValidator.registrationValidator, registeration);
// app.post("/login", authValidator.loginValidator, login);
// app.delete("/logout", logout);
// app.get("/profile", authMiddleware.checkAuthentication, userInfo);

app.post("/register",(req, res)=>{
    res.send(["Response from register!!!!" ,req.body]);
});
app.post("/login",(req, res)=>{
    res.send(["Response from login!!!!", req.body]);
});
app.delete("/logout",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from logout!!!!", "cookie=" + cookieHeader]);
});
app.get("/profile",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from profile!!!!", "cookie=" + cookieHeader]);
});
app.get("/",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from /!!!!", "cookie=" + cookieHeader]);
});

app.listen(5001, () => {
    console.log(`User Server listening on port 5001...`);
});


