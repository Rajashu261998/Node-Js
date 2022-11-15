const express = require("express")

const path = require("path")

const app = express()
const pathName = path.join(__dirname,"public")

app.get('',(_,resp)=>{
    resp.sendFile(`${pathName}/index.html`)
})

app.get("/about",(_,resp)=>{
    resp.sendFile(`${pathName}/about.html`)
})

app.get("/help",(_,resp)=>{
    resp.sendFile(`${pathName}/help.html`)
})

app.listen(6060)