const express=require('express')
const path=require('path')
let app=express();
let port=8080;
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.listen(port,() => {
    console.log(`listening on port : ${port}`)
})
app.get('/',(req,res) => {
    res.render('home.ejs')
})
