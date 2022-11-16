const dbConnect = require("./mongodb")
const item = require("./product")

const insertData = async ()=>{
    const db=await dbConnect()
    const result =await db.insert(item)
    console.log(result)
}

insertData()