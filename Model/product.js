const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name:{type:String},
    price:{type:String},
    description:{type:String},
    discount:{type:String},
},{timestamps:true});

const productSchema = mongoose.model("product",Product);

module.exports = productSchema;