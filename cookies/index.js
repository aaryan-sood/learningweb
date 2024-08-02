const express=require('express')
const cookieParser=require('cookie-parser')
let port=3000

app=express()

//middleware to parse cookies in express
app.use(cookieParser('thisissecretcode'))  // thisissecretcode is the string used to sign the cookies

app.get('/greet',(req,res)=>{
    console.log(req.cookies)
    res.send(`Hey there ${req.cookies.name},`)
})

app.get('/setname',(req,res) => {
    res.cookie('name','aaryan sood')
    res.cookie('animal','chicken')
    res.send('Sent you a cookie')
})

app.get('/getsignedcookie',(req,res) => {
    res.cookie('fruit','mango',{signed : true})
    res.send('the cookie is signed')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})