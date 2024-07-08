const mongoose=require('mongoose')

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

const Farm=mongoose.model('Farm',farmSchema)
module.exports=Farm;