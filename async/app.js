// function multiply(x,y) {
//     return x * y;
// }

// function square(x) {
//     return multiply(x,x);
// }

// function isRightTriangle(a,b,c){
//     return square(a) + square(b) === square(c);
// }
// console.log('before');
// isRightTriangle(3,4,5)
// console.log('after');

// console.log('I print first');
// setTimeout(() => {
//     console.log('I print after three seconds')
// },3000);
// console.log('I print second');

// setTimeout(()=> {
//     document.body.style.backgroundColor='red';
//     setTimeout(() => {
//         document.body.style.backgroundColor='orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor='yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor='green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor='blue'
//                     setTimeout(() => {
//                         document.body.style.backgroundColor='indigo'
//                         setTimeout(() => {
//                             document.body.style.backgroundColor='violet'
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// const delayedColorChange=(newColor,delay,doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor=newColor;
//         doNext && doNext();
//     },delay)
// }

const delayedColorChange=(color,delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor=color
            resolve();
        },delay)
    })
}


delayedColorChange('red',1000)
.then(()=> {
    return delayedColorChange('orange',1000)
})
.then(() => {
    return delayedColorChange('yellow',1000)
})
.then(() => {
    return delayedColorChange('green',1000)
})
.then(() => {
    return delayedColorChange('blue',1000)
})
.then(() => {
    return delayedColorChange('indigo',1000)
})
.then(() => {
    return delayedColorChange('violet',1000)
})
.catch(()=> {
    console.log('Oh shit Promise rejected')
})

// delayedColorChange('red',1000,() => {
//     delayedColorChange('orange',1000, ()=> {
//         delayedColorChange('yellow',1000,() => {
//             delayedColorChange('green',1000,() => {
//                 delayedColorChange('blue',1000,() => {
//                     delayedColorChange('indigo',1000,()=> {
//                         delayedColorChange('violet',1000,() => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// searchMoviesAPI('amadeus',() => {
//     saveToMyDB(movies,() => {
//         // if it works run this
//     },() => {
//         // if it does not work run this
//     })
// },() => {
//     // if API is down, or request failed
// })