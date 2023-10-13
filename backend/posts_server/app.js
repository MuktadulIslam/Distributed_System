const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/post",(req, res)=>{
    res.send("Response from post psot!!!!");
});

app.get("/post",(req, res)=>{
    res.send("Response from post get!!!!");
});

app.listen(5002, () => {
    console.log(`Post Server listening on port 5002...`);
});