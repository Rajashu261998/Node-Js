const dbConnect = require("./mongodb")

const updateData = async ()=>{
    let data = await dbConnect()

    let result = await data.updateOne(
        {name:"F22"},{$set:{name:"A12"}}
    )
    console.log(result)
}
updateData()