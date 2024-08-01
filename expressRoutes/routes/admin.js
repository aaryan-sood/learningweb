const express=require('express')
const router=express.Router()

router.use((req,res,next) => {
    if(req.query.isAdmin){
        next()
    }
    else{
        res.send('Sorry you  are not an admin')
    }
})

router.get('/topsecret',(req,res) => {
    res.send('This is top secret')      
})

router.get('/delete',(req,res) => {
    res.send('Deleting Everything')
})

module.exports=router