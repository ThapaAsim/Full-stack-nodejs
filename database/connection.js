//hami yeha database connection ko code/logic lekxam

const{Sequelize,DataTypes} = require("sequelize")

//or we can also do like this 
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.uyeboblsippbthiziaor:firstproject@1@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
)

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



module.exports = db