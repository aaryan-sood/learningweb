const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(data => console.log('connection open'))
.catch(err => console.log('new error'))

let personSchema=new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save',async function(){
    console.log('About to Save')
})

personSchema.post('save',async function(){
    console.log('Just Saved')
})
let Person=mongoose.model('Person',personSchema)

