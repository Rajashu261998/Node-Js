const express = require("express")

const mongodb = require("mongodb")

const dbConnect =require("./mongodb")

const app =express()

app.use(express.json())

app.get("/", async (req,resp)=>{
    let data = await dbConnect()
    data= await data.find().toArray()
    resp.send(data)
})


app.post("/", async (req,resp)=>{
    let data = await dbConnect()
    let result = await data.insert(req.body)
    resp.send(result)
})

app.put('/:name', async (req,resp)=>{
    let data = await dbConnect()
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
        
    )
    resp.send(result)
})

app.delete("/:id", async (req,resp)=>{
    let data = await dbConnect()
    let result =await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    resp.send(result)
})

app.listen(8085)