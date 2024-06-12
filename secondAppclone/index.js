const express=require('express')
const path=require('path')
const app=express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
let port=8080;
app.listen(port,() => {
    console.log(`app started on port : ${port}`)
})
app.get('/',(req,res) => {
    res.render('home.ejs')
})
app.get('/rand',(req,res) => {
    let num=Math.floor(Math.random() * 10) +1;
    res.render('random.ejs',{num})
})
app.get('/r/:subreddit',(req,res) => {
    let {subreddit}=req.params
    res.render('subreddit.ejs',{subreddit});
})
app.get('/cats',(req,res) => {
    let cats=[
        'blue','Rocket','Monty','Stephanie','Winston'
    ]
    res.render('cats.ejs',{cats})
})