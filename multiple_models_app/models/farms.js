const mongoose=require('mongoose')
const Product=require('./products.js')

const farmSchema=new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Farm name is required']
    },
    city :{
        type : String
    },
    email : {
        type : String,
        required : [true,'email required']
    },
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }]              //Here in this farm we have an array of id's  as a farm can have many products
}) 

// It is of no use as the it is query middleware and query middleware does not have access to the document it appends or deletes
// farmSchema.pre('findOneAndDelete',async function(data){
//     console.log('Pre Middleware !!!')
//     console.log(data)
// })

farmSchema.post('findOneAndDelete',async function(farmdata){
    if(farmdata.products.length){
        // so the products field in the farm looks like this [products : ncjnfkwjh544575scsj,jkhkh4993882] 
        const res=await Product.deleteMany({ _id : {$in : farmdata.products}})
        console.log(res)
    }
    
})

const Farm=mongoose.model('Farm',farmSchema)
module.exports=Farm;