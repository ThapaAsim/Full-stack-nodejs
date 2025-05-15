const { books } = require("../database/connection")

exports.fetchbooks = async (req,res)=>{
    const datas = await books.findAll()
     res.json({
         messsage:"Book is fetched successfully",
       datas
     })
 }

 exports.addbooks =  async (req,res)=>{
    //    const bookName = req.body.bookName
    //    const bookPrice = req.body.bookPrice
    
    const {bookName,bookPrice,bookAuthor} = req.body
    await books.create({
        bookName : bookName,
        bookPrice : bookPrice,  
        authorName : bookAuthor
    })
        res.json({
         message:"Book is added succesfully"
        })
        
    }
exports.updatebooks = (req,res)=>{
        res.json({
         message:"Book is updated succesfully"
        })
     }

    exports.deletebooks = (req,res)=>{

        res.json({
            message:"Book is deleted successfully"
        })
    }

    exports.singleFetchBook = async function (req,res){
        const id = req.params.id
        const datas = await books.findByPk(id)
        res.json({
            message:"Single Book Fetched sucessfully",
            datas
        })
    }
    // module.exports = {fetchbooks,addbooks,updatebooks,deletebooks}  or we can directly do it by 