let mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/relationsDb')
.then(() => {
    console.log('Connection open')
})
.catch(() => {
    console.log('connection failed')
})

//Made the two schemas
const userSchema=new mongoose.Schema({
    username : String,
    age : Number
})

const tweetSchema=new mongoose.Schema({
    text : String,
    likes : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})  

//Making models out of them
const User=mongoose.model('User',userSchema)
const Tweet=mongoose.model('Tweet',tweetSchema)

// makeTweet=async() => {
//     // const u=new User({username : 'aaryansood',age :22})
//     const u=await User.findOne({username : 'aaryansood'})
//     const tweet2=new Tweet({text : 'hello how are you doing',likes : 12349})
//     tweet2.user=u
//     await tweet2.save()

// }
// makeTweet()

findTweet=async () => {
    const t=await Tweet.find({}).populate('user')
    console.log(t)
}
findTweet()