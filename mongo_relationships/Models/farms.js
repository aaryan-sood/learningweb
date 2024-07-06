const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/relationsDb')
.then(() => {
    console.log('mongo connection succesfull')
})
.catch(() => {
    console.log('mongo connection error')
})

//definning the Products Schema
const productSchema=new mongoose.Schema({
    name : String,
    price : Number,
    season : {
        type : String,
        enum : ['Spring','Summer','Fall','Winter']
    }
})

//Definning the farm schema
const farmSchema=new mongoose.Schema({
    name : String,
    city : String,
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }]
})

//Making models out of it
const Product =mongoose.model('Product',productSchema);
const Farm=mongoose.model('Farm',farmSchema)

// Product.insertMany([
//     {name : 'Goddess Melon',price : 4.99,season : 'Summer'},
//     {name : 'Sugar Baby watermelon',price : 4.99,season : 'Summer'},
//     {name : 'Asparagus',price : 3.99,season : 'Spring'}
// ])

// const makeFarm = async () => {
//     const farm = new Farm({name : 'Full Belly Farms' , city : 'Guinda,CA'})
//     const melon= await Product.findOne({name : 'Goddess Melon'})
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }
// makeFarm()

const addProduct = async () => {
    const farm=await Farm.findOne({name : 'Full Belly Farms'})
    const watermelon=await Product.findOne({name : 'Sugar Baby watermelon'})
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}
// addProduct()

Farm.findOne({name : 'Full Belly Farms'})
.populate('products')
.then(farm => console.log(farm))