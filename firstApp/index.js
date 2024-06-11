import express from 'express'
const app=express()
console.dir(app)
const port=3000;
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

app.get('/cats',(req,res) => {
    res.send('this is cats page on the webpage')
})
app.get('/dogs',(req,res) => {
    res.send('this is a dogs page on the webpage')
})
app.get('/',(req,res) => {
    res.send('Welcome to the homepage of the webpage')
})
app.post('/cats',(req,res) => {
    res.send('this is post request to /cats')
})
app.get('/r/:subreddit',(req,res) => {
    // nw here we will first extract the general patter string first from req.param by destructuring it from the object and then send a response according to the string
    let {subreddit}=req.params  // destructuring the object in JS {variable} variable here needs to have the same name as in the object
    res.send(`<h1>requesting the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:comment/:postId',(req,res) => {
    let {subreddit,comment,postId}=req.params
    res.send(`<h1>requesting the ${subreddit} subreddit and reading ${comment}'s comment having ${postId} postid</h1>`)
})
app.get('/search',(req,res) => {
    let {q,color}=req.query
    if(q === undefined || color === undefined){
        res.send(`<h1> Nothing searched so nothing returned </h1>`)
    }
    res.send(`<h1> Hi recieved your query regarding q=${q} and color=${color}`)
})
app.get('*',(req,res) => {
    res.send(`i don't know that path`)
})

// app.use((req,res) => {
//     console.log(`another request made on port  ${port}`)
//     // res.send({red : 'color'})
//     // res.send('<h1>This is my webpage</h1>')
// })