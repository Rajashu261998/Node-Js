const dbConnect = require("./mongodb")

const insert = async ()=>{
    const db=await dbConnect()
    const result =await db.insert({
        name:"max",
        brand:"max",
        price:364,
        category:"mobile"
    })
    console.log(result)
}

insert()