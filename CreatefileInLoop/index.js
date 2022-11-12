// Create multiple files using loop in modulepath

const fs = require('fs')

const path = require('path')

const dirName = path.join(__dirname,'files')

for( i=0;i<5;i++){

    fs.writeFileSync(`${dirName}/Data${i}.txt`,"This is my file")
}

// Reade file using readdir module

fs.readdir(dirName, (err, file)=>{
    // console.log(file) // it gives files in an arrr

    //So we use forEach to get file without array

    file.forEach((item)=>{
        console.log(item)
    })



})