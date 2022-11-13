const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send(
        `
        <h1>Welcome to Home Page</h1>
        <a href="/about">Go to about Page</a>
        <br/>
        <a href="/help">Need Help</a>
        `
    )
})

app.get('/about',(req,res)=>{
    res.send(`
    <h1>Know about more</h1>
    <a href="/">Go to Home Page</a>
    <br/>
    <a href="/help">Need Help</a>
    
    `)
})

app.get('/help',(req,res)=>{
    res.send(`
    <h1>Need help, Contact us</h1>
    <a href="/about">Go to about Page</a>
    <br/>
    <a href="/">Go to Home Page</a>
    
    `)
})

app.listen(4545)