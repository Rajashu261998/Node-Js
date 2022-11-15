const express = require('express')
const reqFilter=require("./middleware")
const app = express()

// Application-level middleware
// app.use(reqFilter)

// app.get('/',(req,resp)=>{
//     resp.send("Welcome to home")
// })

// app.get('/about',(req,resp)=>{
//     resp.send("welcome to about page")
// })

// app.get("/help",(req,resp)=>{
//     resp.send("Welcome to hepl")
// })

// Single-route middleware



// app.get('/',reqFilter,(req,resp)=>{
//     resp.send("Welcome to home")
// })

// app.get('/about',(req,resp)=>{
//     resp.send("welcome to about page")
// })

// app.get("/help",reqFilter,(req,resp)=>{
//     resp.send("Welcome to hepl")
// })

// Grop-route middlweare

const route = express.Router()
route.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send("Welcome to home")
})

route.get('/about',(req,resp)=>{
    resp.send("welcome to about page")
})

route.get("/help",(req,resp)=>{
    resp.send("Welcome to hepl")
})


app.use('/',route)


app.listen(4848)