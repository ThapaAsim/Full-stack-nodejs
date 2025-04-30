
const express = require("express")
const app = express()

require("./database/connection")

app.get("/book",(req,res)=>{
    res.json({
        messsage:"Book is fetched successfully"
    })
})

app.post("/book",(req,res)=>{
    res.json({
     message:"Book is added succesfully"
    })
    
})
app.patch("/book/:id",(req,res)=>{
   res.json({
    message:"Book is updated succesfully"
   })
})

app.delete("/book/:id",(req,res)=>{

    res.json({
        message:"Book is deleted successfully"
    })
})




app.listen(4000,function(){
    console.log("project/backend has started at port 4000")
})