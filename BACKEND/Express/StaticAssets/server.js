import express from "express";
import path from "path";
import url from "url";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + path.join("app","index.html"));
});


app.listen(port,()=>{
    console.log(`Server is running in port ${port}.`);
});
