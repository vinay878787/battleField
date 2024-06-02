const express = require("express");
const app = express();
const data = require("./utils/data.json")

app.get("/quickmatch",(req,res)=>{
    res.json({message:data})
})

app.listen(3000,()=>{
    console.log("server connected");
})