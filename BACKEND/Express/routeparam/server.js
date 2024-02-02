import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.redirect("/word/echo");
})
app.get("/:word/echo",(req,res)=>{
    console.log(req.params);
    res.json({
        "echo":"word"
    });
});


app.listen(3000,()=>{
    console.log("Server is running.");
});