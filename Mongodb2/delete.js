const dbConnect = require("./mongodb")

const deleteData = async ()=>{
    let data = await dbConnect()
    let result = await data.deleteMany({brand:"max"})
    console.log(result)
}

deleteData()