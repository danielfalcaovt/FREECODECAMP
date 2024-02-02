import express from "express";
import bodyParser from "body-parser";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + path.join('index.html'));
});

app.post("/",(req,res)=>{
    const username = req.body.username;
    res.json({
        "name":username
    })
});

app.listen(port,()=>{
    console.log(`Server is running in ${port}.`);
});