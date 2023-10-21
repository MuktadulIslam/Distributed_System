const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const config = require("./config/config.js")
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


const { createNotification } = require("./controllers/createNotification.js")
const { sendNotification } = require("./controllers/sendNotification.js")
const { deleteNotification } = require("./controllers/deleteNotification.js")
const { authValidator } = require("./middlewares/authValidator.js")
const { connectToDatabase } = require("./repository/databaseCRUD.js");

app.post('/notification', createNotification);
app.get('/notification', authValidator, sendNotification)
app.delete('/notification', authValidator, deleteNotification);


async function startTheServer() {
    await createMongoDatabase();
    await connectToDatabase();
    await app.listen(config.PORT_NUMBER, () => {
        console.log('User Server listening on port ' + config.PORT_NUMBER + '...');
    });
}

startTheServer()