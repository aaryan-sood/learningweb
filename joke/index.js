const jokes=require('give-me-a-joke')
const colors=require('colors');
const cowsay=require("cowsay")
jokes.getRandomDadJoke(function (joke){
    console.log(joke.green)
})

console.log('Hello'.green);
console.log("Rainbow !!".rainbow)