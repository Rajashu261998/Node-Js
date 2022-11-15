const express =require("express")
// const path

const app= express()

app.set('view engine','ejs')

app.get('/profile',(_,resp)=>{

    const user={
        name:"Ashu",
        email:"ash@gmail",
        city:"Patna",
        skills:['php','c++','c','js','react','node']
    }
    resp.render('profile',{user})
})


app.listen(3333)