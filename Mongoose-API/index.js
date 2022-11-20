const express = require("express")
require("./config")

const ProductsModel=require("./product")

const app = express()

app.use(express.json())

app.post("/create",async (req,resp)=>{
    const data = new ProductsModel(req.body)
    const result = await data.save()
    resp.send(result)
})

app.get("/list", async (req,resp)=>{
    const data = await ProductsModel.find()
    resp.send(data)
})

app.delete("/delete/:_id", async (req,resp)=>{
    const data = await ProductsModel.deleteOne(req.params)
    resp.send(data)
})

app.put("/update/:_id", async ()=>{
    const data = await ProductsModel.updateOne(
        req.params,
        {$set: req.body}
    )
    resp.send(data)
})

app.listen(1212)