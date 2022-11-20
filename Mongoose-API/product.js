const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})

const ProductsModel = mongoose.model("Products",ProductSchema)

module.exports=ProductsModel