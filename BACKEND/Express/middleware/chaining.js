import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.redirect("/now")
});

app.get("/now",function(req,res,next){
    req.time = new Date().toString();
    next();
},function(req,res){
    res.json({
        "time":req.time
    })
});

app.listen(3000,()=>{
    console.log("App is running.");
});