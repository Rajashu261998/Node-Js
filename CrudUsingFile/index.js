const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname, 'crud')


// CREATE
const filePath = `${dirPath}/info.txt`

const filePath2= `${dirPath}/Section.txt`

fs.writeFileSync(filePath,'This is creation of file')

fs.writeFileSync(filePath2,'This is section part')

// READ

fs.readFile(filePath, 'utf8', (err, item)=>{
   
        console.log(item)
    
})


// UPDATE

fs.appendFile(filePath,' and file name is info.txt',(err)=>{
    if(!err)
    {
        console.log("file is updated")
    }
})


// RENAMe

fs.rename(filePath, `${dirPath}/data.txt`,(err)=>{
    console.log("file name is changed")
})

// DELETE

fs.unlinkSync(`${dirPath}/Section.txt`)


