import express from "express" 
const app=express()   
connectdb();
app.listen(3000,{
    console.log("server started")
})