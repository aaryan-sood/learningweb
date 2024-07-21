const express=require('express')
const shelterRoutes=require('./routes/shelter.js')
let port=3000;

app=express()

//middleware to use for shelterRoutes
app.use('/shelters',shelterRoutes)

app.listen(port,() => {
    console.log(`app started on port ${port}`)
})