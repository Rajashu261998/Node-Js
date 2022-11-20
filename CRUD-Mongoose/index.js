const mongoose = require("mongoose")




mongoose.connect("mongodb://localhost:27017/e-comm")

const ProductSchemma = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})

const CreateInDB = async ()=>{
    const ProductModel = mongoose.model("Products",ProductSchemma)
    const data = new ProductModel(
       
        {
            name:"Vivo1",
            brand:"oppo",
            price:666,
            category:"Mobile"
        }
    )
    const result = await data.save()
    console.log(result)
}

const updatinDB = async ()=>{
    const ProductModel = mongoose.model("Products",ProductSchemma)
    let data = await ProductModel.updateOne({name:"M1A"},{$set:{name:"M16",brand:"lg",price:2564,category:"refri"}})
    console.log(data) 
}

const deleteinDB = async ()=>{
    const ProductModel= mongoose.model("Products",ProductSchemma)
    let data = await ProductModel.deleteOne({name:"Poco"})
    console.log(data)
}

const findInDB = async ()=>{
    const ProductModel= mongoose.model("Products",ProductSchemma)
    const data = await ProductModel.find()
    console.log(data)
}






CreateInDB()
updatinDB()
deleteinDB()
findInDB()