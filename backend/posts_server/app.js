const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const { connectToDatabase } = require("./repository/databaseCRUD.js");
const {createMongoDatabase} = require("./repository/mongoDB.js")

const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: ['http://localhost:4000'],
        credentials: true
    })
);


const { createPost } = require("./controllers/createPost.js")
const { sendPost, sendAllPost } = require("./controllers/PostSender.js")
const { authValidator } = require("./middlewares/authValidator.js")
const { singleFileUploader } = require("./middlewares/fileUploder.js")

// app.post('/post',authValidator,singleFileUploader('image'), createPost);
app.post('/post', authValidator, createPost);
app.get('/post', sendAllPost);
app.get("/post/:id", sendPost)


async function startTheServer() {
    await createMongoDatabase();
    await connectToDatabase();
    await app.listen(config.PORT_NUMBER, () => {
        console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
    });
}

startTheServer()
