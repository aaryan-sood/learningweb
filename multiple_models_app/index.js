const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const Product=require('./models/products')
const methodOverride=require('method-override')
const Farm=require('./models/farms.js')

let app=express()
let port=3000
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))   //express middleware to use method override

const categories=['fruit','vegetable','diary']

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
.then(() => console.log('mongoose connection open'))
.catch(() => console.log('mongoose connection error'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// FARM ROUTES

app.get('/farms',async(req,res) => {
    const farms=await Farm.find({})
    res.render('farms/index.ejs',{farms})
})

app.get('/farms/new',(req,res) => {
    res.render('farms/new.ejs')
})

app.post('/farms',async (req,res) => {
   const farm= new Farm(req.body)
   await farm.save()
   res.redirect('/farms')
})


//PRODUCTS ROUTES
//view the products
app.get('/products',async (req,res) => {
    // now in this get route we will list all our products by resonding and sending a webpage by quering the database
       //now since it takes time and returns a thenable object we add .then and .catch or make it a async function and just await it
    
    let {category} = req.query
    if(category){
        const products=await Product.find({category : category})
        res.render('products/index.ejs',{products,category})
    }
    else
    {
        const products=await Product.find({})
        res.render('products/index.ejs',{products,category : 'All'})
    }
})

app.post('/products',async(req,res) => {
    const newProduct=new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

//serve the form
app.get('/products/new',(req,res) => {
    res.render('products/new.ejs',{categories})
})

//view products in detail
app.get('/products/:id', async (req,res) => {
    let {id}=req.params
    let product=await Product.findById(id)  
    res.render('products/show.ejs',{product})
})

// to update put or patch request
app.put('/products/:id',async(req,res) => {
    let {id}=req.params
    let product=await Product.findByIdAndUpdate(id,req.body,{runValidators : true , new : true})
    res.redirect(`/products/${product._id}`)
})

//edit individual products
app.get('/products/:id/edit',async (req,res) => {
    let {id}=req.params
    let product=await Product.findById(id)
    res.render('products/edit.ejs',{product,categories })
})

app.delete('/products/:id',async(req,res) => {
    let {id}=req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})