const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const { connectToDatabase } = require("./repository/database.js");

const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3002'],
        credentials: true
    })
);


const {createPost} = require("./controllers/createPost.js")
const {sendPost,sendPosts} = require("./controllers/PostSender.js")
const {authValidator} = require("./middlewares/authValidator.js")
const {singleFileUploader} = require("./middlewares/fileUploder.js")

// app.post('/post',authValidator,singleFileUploader('image'), createPost);
app.post('/post',authValidator, createPost);
app.get('/post',authValidator, sendPosts);
app.get("/post/:id(\\d+)",authValidator, sendPost)


// app.post("/post",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from post psot!!!!", "cookie= " + cookieHeader, req.body]);
// });

// app.get("/post",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from all post get!!!!", "cookie= " + cookieHeader, req.query]);
// });

// app.get("/post/:id(\\d+)",(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from "+ req.params.id + " post get!!!!", "cookie= " + cookieHeader]);
// });


// app.listen(5002, () => {
//     console.log(`Post Server listening on port 5002...`);
// });

connectToDatabase()
    .then(() => {
        app.listen(config.PORT_NUMBER, () => {
            console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
        });
    })
    .catch((error) => {
        console.error('Server startup error:', error);
    });