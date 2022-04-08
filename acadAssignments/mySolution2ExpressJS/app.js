const express=require('express')

const app=express()

app.use("/",(req,res,next)=>{
    console.log("First Middlware logs something");
    next()
})


app.use("/user",(req,res,next)=>{
    res.send("<h3>Endter user response here</h3>")
})


app.use("/",(req,res,next)=>{
    console.log("First Middlware logs something");
    res.send('<h1>This is what is sent as response</h1>')
})


app.listen(3000)
