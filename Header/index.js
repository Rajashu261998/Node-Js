const express = require("express")

const app = express()

app.set("view engine",'ejs')

app.get('/profile',(_,resp)=>{

    const user={
        name:'Ashu',
        city:"Patna",
        email:"ashut@gmail",
        skills:['php','c++','go','js','bloackchain']
    }
    resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})


app.listen(5666)