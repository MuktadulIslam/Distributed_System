const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/notification',(req, res)=>{
    res.send("Response from noticiation!!!!");
});

app.delete('/notification/:id',(req, res)=>{
    res.send("Response from post notification delete!!!!");
});

app.listen(5003, () => {
    console.log(`Notification Server listening on port 5003...`);
});