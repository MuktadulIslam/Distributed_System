const express = require("express");
const cors = require("cors");
const multer = require('multer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
const { connectToDatabase } = require("./repository/databaseCRUD.js");
const {createMongoDatabase} = require("./repository/mongoDB.js");
const {createBucketIfNotExists} = require('./repository/minioDB.js');

const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: ['http://localhost:4000'],
        credentials: true
    })
);
// app.use(bodyParser.urlencoded({ extended: true }));


const { createPost } = require("./controllers/createPost.js")
const { sendPost, sendAllPost } = require("./controllers/PostSender.js")
const { authValidator } = require("./middlewares/authValidator.js")
const { singleFileUploader } = require("./middlewares/fileUploder.js")


async function authValidator2(req, res, next) {
    console.log(req.query.username)
    // res.json({ message: 'Successful' });
    // res.status(400).json({ message: 'Username is required2' });
    next()
}

// app.post('/post',authValidator,singleFileUploader('image'), createPost);
// const upload = multer();
// app.use(bodyParser.json());
// function singleFileUploader2(name) {
//     return async function (req, res, next) {
//         console.log('file')
//         const upload = multer();
//         upload.single(name)(req, res, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 const file = req.file;
//                 console.log(file)
//             }
//         })
//     }
// }
// app.post('/post', authValidator2, singleFileUploader2('image'), async (req, res) => {
//     if (req.file) {
//       console.log('Image file received:',req.file);
//     }
  
//     if (req.body) {
//       console.log('Request body:', req.body);
//     }
  
//     res.json({ message: 'Successful' });
//   });
// app.post('/post',authValidator,upload.single('image'), createPost);
// app.post('/post', authValidator, (req, res, next) => {
//     // If authentication is successful, proceed to file upload
//     singleFileUploader('image')(req, res, next);
// }, createPost);
// app.post('/post', authValidator, createPost);
// app.post('/post', upload.single('image'),authValidator2)
app.post('/post',authValidator,singleFileUploader('image'), createPost);
app.get('/post', authValidator, sendAllPost);
app.get("/post/:id", authValidator, sendPost)



async function startTheServer() {
    await createMongoDatabase();
    await connectToDatabase();
    await createBucketIfNotExists(config.POSTS_BUCKET);
    await app.listen(config.PORT_NUMBER, () => {
        console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
    });
}

startTheServer()
