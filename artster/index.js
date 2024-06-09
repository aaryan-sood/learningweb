let figlet=require('figlet')
let color=require('colors')
figlet("Hello World",function(err,data){
    if(err){
        console.log("Something went wrong")
        console.dir(err)
        console.log(err.green)
    }
    else{
        console.log(data.green)
    }
})
