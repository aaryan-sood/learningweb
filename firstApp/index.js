import express from 'express'
const app=express()
console.dir(app)
const port=3000;
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
app.use((req,res) => {
    console.log(`another request made on port  ${port}`)
    // res.send({red : 'color'})
    res.send('<h1>This is my webpage</h1>')
})