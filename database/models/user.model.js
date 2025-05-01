
const userModel = (sequelize,DataTypes)=>{
   const User = sequelize.define("User",{
        userName : {
            type : DataTypes.STRING
        },
        Password : {
            type : DataTypes.STRING
        },
        Email : {
            type : DataTypes.STRING
        }
    })
    return User
}
module.exports = userModel