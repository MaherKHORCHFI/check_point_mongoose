//import 
const express = require ('express')
const connect = require ('./config/connectDB')


// instanciation
const app=express()


//middlewear
app.use(express.json())

//connect to Data base

connect()

//Routes

app.use('/api/persons', require('./routes/person'))

//port
const port= 5000

app.listen(port, err=>{
    err? console.log(err) : console.log(`server is running on port : ${port}`)
    
})

