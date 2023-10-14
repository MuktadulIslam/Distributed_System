const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post('/notification',(req, res)=>{
    res.send(["Response from notification psot!!!!" , req.body]);
});

app.get('/notification',(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from all notification get!!!!", "cookie= " + cookieHeader, req.query]);
});

app.delete('/notification/:id(\\d+)',(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from "+ req.params.id + " notification get!!!!", "cookie= " + cookieHeader]);
});

app.listen(5003, () => {
    console.log(`Notification Server listening on port 5003...`);
});