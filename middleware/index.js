const express=require('express');
const morgan = require('morgan');
app=express()
let port=3000;

// app.use(morgan('tiny'))

// app.use((req,res,next) => {
//     console.log('Hello from first middleware')
//    return next()
// })

// app.use((req,res,next) => {
//     console.log('Hello from second middleware')
//    return next()
// })
app.use((req,res,next) => {
    req.requestTime=Date.now()      //Just defined req.requestTime for every route handler  
    console.log(req.method,req.path)
    next()
})

app.use('/dogs',(req,res,next) => {
    console.log('I Love Dogs!!')
    next()
})

const verifypassword=((req,res,next) => {
    let {password}= req.query
    if(password === 'chickennuggets'){
        next()
    }
    res.send('sorry you need a password to enter here!!')
})

app.get('/',(req,res) => {
    console.log(`${req.requestTime}`)
    res.send('Home Page')
})

app.get('/secret',verifypassword,(req,res,next) => {
    res.send(`My Secret is : sometimes i wear headphones i public so i need not to talk to people`)
})

app.get('/dogs',(req,res) => {
    console.log(`${req.requestTime}`) 
    res.send('Woof Woof')
})

//setting up a 404 route app.use is generally used to set up a 404 route and it is set up at the end so when nothing matches so it could render at the end 
app.use((req,res) => {
    res.status(404).send('Not Found!!!')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})