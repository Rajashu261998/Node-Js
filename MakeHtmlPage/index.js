
// const express = require('express')
// const path = require('path')

// const app = express()

// const pathName = path.join(__dirname,'public')

// app.use(express.static(pathName))

// app.listen(7575)

const express= require('express')
const path = require('path')

const app =express()

const pathName = path.join(__dirname,'public')

app.use(express.static(pathName))

app.listen(1111)