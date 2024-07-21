const express=require('express')
const shelterRoutes=require('./routes/shelter.js')
const dogRoutes=require('./routes/dogs.js')
let port=3000;

app=express()

//middleware to use for shelterRoutes
app.use('/shelters',shelterRoutes)
app.use('/dogs',dogRoutes)

app.listen(port,() => {
    console.log(`app started on port ${port}`)
})