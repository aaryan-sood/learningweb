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

app.get('/',(req,res) => {
    console.log(`${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs',(req,res) => {
    res.send('Woof Woof')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})