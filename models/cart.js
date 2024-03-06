const mongoose = require( 'mongoose' );
const schema = mongoose.schema;

const cartSchema = new schema({
    
userID: String,
products:[
    {
        productID: {
            type : String ,
        }, 
         quantity:{
           type: Number,
           default:1
        }
    }
],
  amount:{
    type: Number,
    required: true
  }     
}, {timestamps: true})

const cartModel = mongoose.model( "Cart", CartSchema )
module.exports = cartModel