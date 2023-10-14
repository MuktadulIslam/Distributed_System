const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/post",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from post psot!!!!", "cookie= " + cookieHeader, req.body]);
});

app.get("/post",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from all post get!!!!", "cookie= " + cookieHeader, req.query]);
});

app.get("/post/:id(\\d+)",(req, res)=>{
    const cookieHeader = req.headers.cookie;
    res.send(["Response from "+ req.params.id + " post get!!!!", "cookie= " + cookieHeader]);
});


app.listen(5002, () => {
    console.log(`Post Server listening on port 5002...`);
});