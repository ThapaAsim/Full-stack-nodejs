//hami yeha database connection ko code/logic lekxam

const{Sequelize,DataTypes} = require("sequelize")


//or we can also do like this 
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.uyeboblsippbthiziaor:firstproject@1@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
)

const bookModel = require ("./models/book.model")
   bookModel(sequelize,DataTypes) 

const productModel = require ("./models/product.model")
    productModel(sequelize,DataTypes)

const userModel = require("./models/user.model")
     userModel(sequelize,DataTypes)

sequelize.authenticate()
.then(()=>{
    console.log("Connected Successfully")
})
.catch((err)=>{
    console.log("Error" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.books = bookModel
db.products = productModel
db.users = userModel


//aba yeha sabai kam sakiyo but yo table supabase ma create bhaxaina so we need to migrate for that we nedd to write some code here

sequelize.sync({alter:false}) .then(()=>{
    console.log("migration sucessful")
})


module.exports = db