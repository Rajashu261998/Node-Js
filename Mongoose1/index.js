const mongoose = require("mongoose")

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const ProductSchema = new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    })

    const ProductsModel = mongoose.model("Products",ProductSchema)

    let data = new ProductsModel({
        name:"M 13",
        brand:"Nokia",
        price:5000,
        category:"Mobile"
    })
    let result = await data.save()
    console.log(result)
}

main()