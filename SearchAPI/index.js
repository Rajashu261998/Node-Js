const express = require("express")

require("./config")

const ProductModel= require("./product")

const app =express()

app.use(express.json())

app.get("/search/:key",async (req,resp)=>{
    const data = await ProductModel.find(
        {
            $or:[
                {"name":{$regex:req.params.key}},
                {"price":{$regex:req.params.key}},
                {"brand":{$regex: req.params.key}},
                {"category":{$regex: req.params.key}} 
            ]
        }
    )
    resp.send(data)
})


app.listen(5000)
