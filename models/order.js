const mongoose = require( 'mongoose' );
const schema = mongoose.schema;

const orderSchema = new schema({
    
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
  } ,
address:Object,
status:{ 
    type: String,
     default: "pending"
}
}, 

{timestamps: true})

const cartModel = mongoose.model( "Order", OrderSchema )
module.exports = orderModel