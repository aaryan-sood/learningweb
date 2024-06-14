let express=require('express')
const app=express()
let port=8080
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
app.get('/tacos',(req,res) => {
    res.send(`GET /tacos response`)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/tacos',(req,res) => {
    let{meat,qty}=req.body
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})