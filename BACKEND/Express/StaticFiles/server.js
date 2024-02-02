import express from "express";
import path from "path";
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

const absolutePath = __dirname + path.join("app","index.html");
app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
});

app.listen(port,()=>{
    console.log(`App is running in port ${port}.`);
});
