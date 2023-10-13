const express = require("express");
const cors = require("cors");
const registeration = require('./controllers/register.js');
// const login = require('./controllers/login.js');
// const logout = require('./controllers/logout.js');
// const userInfo = require('./controllers/userInfo.js');
// const authValidator = require('./middlewares/authValidator.js');

const app = express();
app.use(express.json());
app.use(cors());


// app.post("/register", authValidator.registrationValidator, registeration);
// app.post("/login", authValidator.loginValidator, login);
// app.delete("/logout", logout);
// app.get("/profile", authMiddleware.checkAuthentication, userInfo);

app.post("/register",(req, res)=>{
    res.send("Response from register!!!!");
});
app.post("/login",(req, res)=>{
    res.send("Response from login!!!!");
});
app.delete("/logout",(req, res)=>{
    res.send("Response from logout!!!!");
});
app.get("/profile",(req, res)=>{
    res.send("Response from profile!!!!");
});

app.listen(5001, () => {
    console.log(`User Server listening on port 5001...`);
});