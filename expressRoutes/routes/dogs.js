const express=require('express')
const router=express.Router()

router.get('/',(req,res) =>{
    res.send('All Dogs')
})

router.post('/',(req,res) =>{
    res.send('Making a dog')
})

router.get('/:id',(req,res) =>{
    res.send('viewing a particular Dog')
})

router.get('/:id/edit',(req,res) =>{
    res.send('editing a particular Dog')
})
module.exports=router