const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/shopApp')
.then(data => console.log('Connection open !!'))
.catch(err => console.log('Oh shit error!!',err))

const productSchema=mongoose.Schema({
    name:{
        type : String,
        required:true,
        maxlength:20
    },
    price : {
        type:Number,
        required:true,
        min : [0,'Price must be possitive']
    },
    onSale: {
        type:Boolean,
        default:false
    },
    categories : {
        type: [String] // Just means it is an array of strings
    },
    qty: {
        online : {
            type:Number,
            default:0
        },
        instore : {
            type:Number,
            default: 0
        }
    }
    ,size:{
        enum : ['S','M','L']
    }
})

//Model
const Product=mongoose.model('Product',productSchema)
  
// const bike=new Product({name: 'Mountain bike', price : 599})
// const newbike=new Product({name:'Mountain Bike',price : 699,color:'red'})
// bike.save()
// newbike.save()
// let pump=new Product({name : 'Tire pump',price : 19.50,onSale:false,categories : ['Cycling']})
// pump.save()
// .then(data => console.log('Insertion Successfull',data))
// .catch(err => console.log('Insertion Failed',err))

Product.findOneAndUpdate({name : 'Tire pump'},{price : -9.50},{new : true,runValidators:true})
.then(data => console.log('Updation Successful',data))
.catch(err => console.log('Oh shit error!!!',err))