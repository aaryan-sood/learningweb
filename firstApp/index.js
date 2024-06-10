import express from 'express'
const app=express()
console.dir(app)
const port=3000;
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
// app.use((req,res) => {
//     console.log(`another request made on port  ${port}`)
//     // res.send({red : 'color'})
//     // res.send('<h1>This is my webpage</h1>')
// })
app.get('/cats',(req,res) => {
    res.send('this is cats page on the webpage')
})
app.get('/dogs',(req,res) => {
    res.send('this is a dogs page on the webpage')
})
app.get('/',(req,res) => {
    res.send('this is the homepage of the webpage')
})
app.post('/cats',(req,res) => {
    res.send('this is post request to /cats')
})
app.get('*',(req,res) => {
    res.send(`i don't know that path`)
})