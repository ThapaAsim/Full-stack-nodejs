

const productModel = (sequelize,DataTypes)=>{
    const product = sequelize.define("Product",{
     productName : {
        type : DataTypes.STRING
      },
      productPrice : {
         type : DataTypes.INTEGER
      },
      productImage : {
        type : DataTypes.STRING
      }
    })
    return product 
}

module.exports = productModel