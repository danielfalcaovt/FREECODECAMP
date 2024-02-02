import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.redirect("/name?");
})

app.get("/name?",(req,res)=>{
    console.log(res.json(req.query));
    res.send("Hello, F* world!")
})

app.listen(3000,()=>{
    console.log("Server is running in 3000.");
});