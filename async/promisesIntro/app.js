// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// Making our own new promise
// new Promise((resolve,reject) => {
//     resolve();
//     // Now resolve reject these are two parametres and they are not only parametres but functions we can execute inside this promise detrermine whether this promise will be rejected or resolved
// })



const fakerequest=(url) => {
    return new Promise((resolve,reject) => {
        const rand=Math.random() 
        setTimeout(() => {
            if(rand < 0.3)
            {
                resolve('Your Fake Data here',url);
            }
            else
            {
                reject('Request Error');
            }
        },1000)
    })
}

async function makerequest(){
    try{
        let data=await fakerequest('yelp.com/page1');
        console.log(data);
    }catch(e){
        console.log('caught an error')
        console.log('error is : ',e)
    }
    
}
makerequest();
// fakerequest('/dogs')
// .then((data) => {
//     console.log('Done with resolve')
//     console.log('data is : ',data);
// })
// .catch((err) => {
//     console.log('error !!!',err)
// })























// THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// Promise Chaining
// fakeRequestPromise('yelp.com/coffee/page1')
// .then((data) => {
//     console.log('It Worked (page1)')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/coffee/page1')
// })
// .then((data) => {
//     console.log('It worked (page2)')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/coffee/page2')
// })
// .then((data) => {
//     console.log('It worked (page3)')
//     console.log(data)
// })
// .catch((err) => {
//     console.log('any one of the requests failed')
//     console.log(err)
// })

//Promises data request
// fakeRequestPromise('yelp.com/coffee/page1')
// .then(() => {
//     console.log('It Worked (page1)')
//     fakeRequestPromise('yelp.com/coffee/page2')
//     .then(() => {
//         console.log('It Worked (page2)')
//         fakeRequestPromise('yelp.com/coffee/page3')
//         .then(() => {
//             console.log('It Worked (Page3)')
//         })
//         .catch(() => {
//             console.log('Oh no,Error!!! (page3)')
//         })
//     })
//     .catch(() => {
//         console.log('Oh no,Error!!! (page2)')
//     })
// })
// .catch(() => {
//     console.log('Oh no,Error!!! (page1)')
// })



// CallBack Hell
// fakeRequestCallback('books.com/page1',
//     function (response){
//         console.log('IT Worked!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response){
//                 console.log('It Worked Again!!')
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response){
//                         console.log('It worked (3rd time)')
//                         console.log(response)
//                     },
//                     function (err){
//                         console.log('Error!!!',err)
//                     }
//                 )
//             },
//             function (err){
//                 console.log('Error(2nd try) !!!',err)
//             }
//         )

//     },
//     function (err){
//         console.log('Error !!',err)
//     })



