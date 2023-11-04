const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const { connectToDatabase } = require("./repository/databaseCRUD.js");
const {createMongoDatabase} = require("./repository/mongoDB.js");
const {createBucketIfNotExists} = require('./repository/minioDB.js');
const {POSTS_BUCKET} = require('./config/minioClient.js')

const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: [config.FRONTEND1, config.FRONTEND2],
        credentials: true
    })
);


const { createPost } = require("./controllers/createPost.js")
const { sendPost, sendAllPost } = require("./controllers/PostSender.js")
const { authValidator } = require("./middlewares/authValidator.js")
const { singleFileUploader } = require("./middlewares/fileUploder.js")


app.post('/post',authValidator,singleFileUploader('image'), createPost);
app.get('/post', authValidator, sendAllPost);
app.get("/post/:id", authValidator, sendPost)
app.get("/get",async (req, res)=>{
    res.status(200).json({message: "successs!!!!"})
})



async function startTheServer() {
    await createMongoDatabase();    // comment-in this line while creating docker compose
    await connectToDatabase();
    await createBucketIfNotExists(POSTS_BUCKET);
    await app.listen(config.PORT_NUMBER, () => {
        console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
    });
}

startTheServer()
