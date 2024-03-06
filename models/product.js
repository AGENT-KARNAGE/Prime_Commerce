const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const productSchema = new Schema({
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