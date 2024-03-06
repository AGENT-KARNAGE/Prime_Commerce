const mongoose = require( 'mongoose' );
const schema = mongoose.schema;

const productSchema = new schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: String, 
    colour: String, 
    price:{
        type: Number, 
        required: true 
    },
    category:{type: Array },

       
}, {timestamps: true})

const productModel = mongoose.model( "Product", ProductSchema )
module.exports = ProductModel