const express=require('express')
const path=require('path')
const app=express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
let port=8080;
app.listen(port,() => {
    console.log(`app started on port : ${port}`)
})
app.get('/',(req,res) => {
    res.render('home.ejs')
})