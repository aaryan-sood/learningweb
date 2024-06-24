const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const Product=require('./models/products')

let app=express()
let port=3000
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => console.log('mongoose connection open'))
.catch(() => console.log('mongoose connection error'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//view the products
app.get('/products',async (req,res) => {
    // now in this get route we will list all our products by resonding and sending a webpage by quering the database
    const products=await Product.find({})   //now since it takes time and returns a thenable object we add .then and .catch or make it a async function and just await it
    console.log(products)
    res.render('products/index.ejs',{products})
})

app.post('/products',async(req,res) => {
    const newProduct=new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

//serve the form
app.get('/products/new',(req,res) => {
    res.render('products/new.ejs')
})

//view products in detail
app.get('/products/:id', async (req,res) => {
    let {id}=req.params
    let product=await Product.findById(id)
    console.log(product)
    res.render('products/show.ejs',{product})
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})