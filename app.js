
const express = require("express")
const { fetchbooks, addbooks, updatebooks, deletebooks } = require("./controllers/bookController")
const bookRoute = require("./routes/bookroutes")

const app = express()
require("./database/connection")
app.use(express.json())


app.use("/api", bookRoute)

app.listen(4000,function(){
    console.log("project/backend has started at port 4000")
})