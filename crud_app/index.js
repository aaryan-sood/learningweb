const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const Product=require('./models/products')

let app=express()
let port=3000

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => console.log('mongoose connection open'))
.catch(() => console.log('mongoose connection error'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/dogs',(req,res) => {
    res.send('Woof')
})


app.listen(port,() => {
    console.log(`listening on port ${port}`)
})