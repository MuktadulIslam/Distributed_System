const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


app.post("/register", authValidator.registrationValidator, authController.register);
app.post("/login", authValidator.loginValidator, authController.login);
app.delete("/logout", authController.logout);
app.get("/", authMiddleware.checkAuthentication, authController.getLoggedInUser);


app.listen(5001, () => {
    console.log(`Server listening on port 5001...`);
});