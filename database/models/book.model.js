//database ma book name ko table banauna paryo ani tyo table bhitra chai hamle different tables haru create garnu paro like book name, book author, book price,book genre,etc

const bookModel = (sequelize,DataTypes)=>{
      
   const Book = sequelize.define("book",{
        bookName : {
           type : DataTypes.STRING,
           allowNull :false
        },
        bookPrice:{
            type : DataTypes.INTEGER
        },
        authorName : {
            type : DataTypes.STRING

        }
     })
     return Book
}

module.exports = bookModel