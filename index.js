import express from "express";
import fs from "fs";
import path from "path";

const app = express();

app.get("/getproducts", (req, res) =>{
    const dir = path.resolve();
    res.sendFile(path.join(dir, 'index.html'))
});

app.listen(5000, ()=>{
    console.log("Server is working");
})

console.log(path.resolve())