const express=require('express');
const morgan = require('morgan');
app=express()
let port=3000;

app.use(morgan('tiny'))
app.get('/',(req,res) => {
    res.send('Home Page')
})

app.get('/dogs',(req,res) => {
    res.send('Woof Woof')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})