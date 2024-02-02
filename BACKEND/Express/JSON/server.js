import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.redirect("/json")
})
app.get("/json",(req,res)=>{
    res.json({
        "message":"Hello json"
    })
});

app.listen(port,()=>{
    console.log("App is running in port 3000.");
});
