
const express = require("express")
const { books } = require("./database/connection")
const app = express()

require("./database/connection")

app.get("/book",async (req,res)=>{
   const datas = await books.findAll()
    res.json({
        messsage:"Book is fetched successfully",
      datas
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