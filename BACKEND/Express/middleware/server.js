import express from "express";

const app = express();

app.use(function(req,res,next){
    console.log("Hello, to the f* World!");
    next();
});
app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} ${req.ip}`);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

app.listen(3000,()=>{
    console.log("APP IS RUNNING.");
})