const {MongoClient}=require("mongodb")
const url = "mongodb://localhost:27017"
const databaseName='e-comm'
const client = new MongoClient(url) 

async function dbConnect(){
    let result=await client.connect()
    let db=result.db(databaseName)
    return db.collection('Products')
}

module.exports=dbConnect