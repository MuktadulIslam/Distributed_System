const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")

const app = express();
app.use(express.json());
app.use(cookieParser(config.COOKIE.secret));
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3002'],
        credentials: true
    })
);


const {createNotification} = require("./controllers/createNotification.js")
const {sendNotification} = require("./controllers/sendNotification.js")
const {deleteNotification} = require("./controllers/deleteNotification.js")
const {authValidator} = require("./middlewares/authValidator.js")
const { connectToDatabase } = require("./repository/database.js");

app.post('/notification',createNotification);
app.get('/notification',authValidator, sendNotification)
app.delete('/notification',authValidator, deleteNotification);

// app.post('/notification',(req, res)=>{
//     res.send(["Response from notification psot!!!!" , req.body]);
// });

// app.get('/notification',(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from all notification get!!!!", "cookie= " + cookieHeader, req.query.username]);
// });

// app.delete('/notification',(req, res)=>{
//     const cookieHeader = req.headers.cookie;
//     res.send(["Response from "+ req.params.id + " notification get!!!!", "cookie= " + cookieHeader]);
// });
// 
// app.listen(5003, () => {
//     console.log(`Notification Server listening on port 5003...`);
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