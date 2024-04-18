// let rand=Math.random();
// if(rand < 0.5)
// {
//     console.log('it is less than 0.5');
// }
// else
// {
//     console.log('it is greater than 0.5');
// }
// console.log(rand);

// let day=prompt('enter the day of the week').toLowerCase();
// if(day == 'monday')
// {
//     console.log(`It's Monday`);
// }
// else if(day == 'saturday')
// {
//     console.log(`It's Saturday`);
// }
// else
// {
//     console.log('keep working');
// }

// const age=8;
// if(age < 5){
//     console.log('Child');
// }
// else if(age < 10)
// {
//     console.log('Pay $10');
// }
// else if(age < 65)
// {
//     console.log('Pay $20');
// }
// else
// {
//     console.log('Pay $10');
// }

// let password=prompt('enter the password');
// if(password.length >= 6)
// {
//     if(password.indexOf(' ') === -1)
//     {
//         console.log('valid password');
//     }
//     else
//     {
//         console.log('password should not contain spaces');
//     }
// }
// else
// {
//     console.log('Password is to short');
// }

// let count=0;
// while(count < 10)
// {
//     console.log(count);
//     count++;
// }
// const code="aloo";
// let guess=prompt('enter the code...');
// while(!(code === guess))
// {
//     guess=prompt('enter the code...');
// }
// console.log('coreect code');

// input=prompt("hello, say something!");
// while(true)
// {
//     input=prompt(input);
//     if(input == 'stop')
//     {
//         break;
//     }
// }

// let testScores={
//     keenan:80,
//     damon:67,
//     kim:89,
//     shawn:91,
//     marlon:72,
//     dwayne:77,
//     nadia:83,
//     elvira:97,
//     diedre:81,
//     vonnie:60
// };
// for(let person in testScores)
// {
//     console.log(`${person} scored ${testScores[person]}`);
// }
// let sum=0;
// for (let person in testScores)
// {
//     sum+=testScores[person];
// }
// console.log(`the average marks of the class is ${sum/10}`);

// sum=0;
// for(let scores of Object.values(testScores))
// {
//     sum+=scores;
// }
// console.log(`average score is ${sum/Object.values(testScores).length}`);

// let radius=8;
// if(radius < 0)
// {
//     let msg='kjenk';
//     const PI=3.14;
// }
// console.log(PI);
// console.log(msg);
// function bankRobbery()
// {
//     let superheroes=['spiderman','Wolverine','Black Panther','Batwoman'];
//     function help()
//     {
//         for(heroes of superheroes)
//         {
//             console.log(`Save us ${heroes}`)
//         }
//     }
//     help()
// }
// bankRobbery()

// storring the function as a variable
// let greet=function()
// {
//     console.log("Hello");
// }
// greet();

// Higher Order functions passing a function as an argument

// function printTwice(func)
// {
//     func();
//     func();
// }


// function rollDie()
// {        
//     console.log(Math.floor(Math.random() * 6 +1))
// }
// printTwice(rollDie);

// // returning a function from inside a another function
// function tryLuck()
// {
//     let rand=Math.random();
//     if(rand < 0.5)
//     {
//         return function(){
//             console.log('It is a good function');
//         }
//     }
//     else{
//         return function(){
//             console.log('sorry it is a bad function');
//         }
//     }
// }

// Making a factory function that returns a function that can further be used
// function isBetween(min,max)
// {
//     return function(num)
//     {
//         return (num >= min && num <= max);
//     }
// }
// isChild=isBetween(0,18);
// isAdult=isBetween(19,64);
// isSenior=isBetween(65,120);

// Methods
// const myMath={
//     PI:3.14,
//     square:function(x)
//     {
//         return x*x;
//     },
//     cube:function(x)
//     {
//         return x*x*x;
//     }
// }

// this keyword in javascript
const cat={
    name:'nkjns',
    color:'nkjwnrkj',
    breed:'nwknlw',
    meow:function()
    {
        console.log(`${this.name} says Meow Meow Meow`)
    }
}
let meow2=cat.meow;

// try catch statement
// hello.toUpperCase();
// try
// {
//     console.log(hello.toUpperCase());
// }catch{
//     console.log("error !!!")
// }
// console.log("after");

// function yell(msg)
// {
//     try
//     {
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch(e)
//     {
//         console.log(e);
//         console.log("please pass a string next time")
//     }
// }

const numbers=[1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(function(element){
//     console.log(element)
// })

// numbers.forEach(function (element){
//     console.log(element)
// })

//but a simple way to do this nowdays is to use for of loop
// for(ele of numbers)
// {
//     console.log(numbers);
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year:1984
    },
    {
        title:'Sharknado',
        score:35,
        year:2013
    },
    {
        title:'13 Going on 30',
        score:70,
        year:2004
    },
    {
        title:'stand by me',
        score:85,
        year:1986
    },
    {
        title:'waterworld',
        score:62,
        year:1995
    },
    {
        title:'jingle all the way',
        score:71,
        year:1996
    },
    {
        title:'Parasite',
        score:95,
        year:2015   
    },
    {
        title:'Nothing Hill',
        score:77,
        year:1999
    },
    {
        title:'Alien',
        score:90,
        year:1979
    }
]

// movies.forEach(function(obj){
//     console.log(`${obj.tittle} - ${obj.score}/100`)
// })

// const new_array=numbers.map(function(ele){
//     return 2*ele;
// })

// let titles=movies.map(function (obj)
// {
//     return obj.tittle;
// })


//Arrow functions
// const square=function(x){
//     return x*x;
// }

// const square=(x) =>{
//     return x*x;
// }

// const rollDie=() =>{
//     return Math.floor(Math.random() * 6)+1;
// }

// const newMovies=movies.map(function(obj){
//     return `${obj.tittle} - ${obj.score/10}`
// })


// const newMovies=movies.map((obj) =>{
//     return `${obj.title}`
// })

const goodMovie=movies.map((movies) => {
    return (movies.score > 80)
})

const even =numbers.filter((n) => {
    if(n%2 == 0)
    {
        return n;
    }
})

const goodMovies=movies.filter((obj) => {
    if(obj.score > 80)
    {
        return obj;
    }
})

const exams=[80,98,,92,78,77,90,89,84,81,77];
let result=exams.every((score) => {
    return (score > 75)
})

let year_creation=movies.some((film) => {
    return (film.year >= 2015)
})

let prices=[9.99,1.50,19.99,49.99,30.50];
let total=0;
for(price of prices)
{
    total+=price;
}
// console.log(total);

// console.log("reduce");


const final=prices.reduce((accumulator,currentValue) => {
    return accumulator+currentValue;
})

const finalPrice=prices.reduce((accumulator,currentValue) => {
    return accumulator+currentValue;
})
// console.log(final);
// to find the minimum value of an array
// console.log("minimum value of an array");
const minVal=prices.reduce((min,currentPrice) => {
    if(currentPrice < min)
    {
        return currentPrice;
    }
    return min;
})

const highestRated=movies.reduce((current,obj) => {
    if(obj.score > current)
    {
        return obj.score;
    }
    else
    {
        return current;
    }
})

const evens=[2,4,6,8];
let final_total=evens.reduce((sum,curr) => {
    return sum+curr;
},100)

const person={
    first:'aaryan',
    last:'sood',
    fullName: ()=> {
        console.log(this)
        return `${this.first} ${this.last}`
    },
    shoutName:function(){
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        },3000)
    }
}   

function rollDie(numsides=6)
{
    return Math.floor(Math.random()*numsides) + 1; 
}

nums=[13,4,5,21,3,3,1,2,7,6,4,2,53456]
console.log(Math.max(...nums));
console.log(Math.min(...nums))

//Spreading of objects
const feline={legs:4,family:'Felidae'};
const canine={isFurry:true,family:'Canine'};

const obj={...feline};  
const obj1={...feline,isBlack:true};
const catDog={...canine,...feline,family:'Ganja'}

const datafromForms={
    email:'soodaaryan7@gmail.com',
    password:'aaryan@1234',
    username:'iaaryansood'
}
const newobj={...datafromForms,id:234,isAdmin:true      
};   

function sum(){
    return arguments.reduce((total,curr) => {
        return total+curr;
    })
}
function sum(...nums){
    return nums.reduce((total,curr) => {
        return total+curr;
    })
}



const scores=[988729,897654,789765,678954,567893];
const [gold,silver,bronze,...everyoneElse]=scores;
 