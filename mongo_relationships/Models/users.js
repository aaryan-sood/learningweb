let mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/relationsDb')
.then(() => {
    console.log('mongo connection successfull')
})
.catch(() => {
    console.log('error in mongodb connection')
})

const userSchema=mongoose.Schema({
    first:String,
    last : String,
    addresses : [
        {
            street : String,
            city : String,
            state : String,
            country : String
        }
    ]
})

let User=mongoose.model('User',userSchema)

const makeUser = async() => {
    const u= new User({
        first : 'Harry',
        last : 'Potter',
        addresses : [{
            street : '123 Sesame St.',
            city : 'New York', 
            state : 'NY',
            country : 'USA'
        }]
    })
    const res=await u.save()
    console.log(res)
}

const addAdress = async(id) => {
    const user =await User.findById(id)
    user.addresses.push(
        {
            street : '123 Sesame St.',
            city : 'New York', 
            state : 'NY',
            country : 'USA'
        }
    )
    const res=await user.save()
    console.log(res)
}
// makeUser();
addAdress('6686fc2d0181810fd5b29987')
