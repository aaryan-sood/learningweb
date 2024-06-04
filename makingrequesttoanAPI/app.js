//xml http request 
// const req=new XMLHttpRequest();
// req.onload=function(){
//     console.log('It Worked!!')
//     let data=JSON.parse(this.responseText)
//     console.log(data.name,data.height)
// }

// req.onerror=function(){
//     console.log('Error!!')
//     console.log(this.response)
// }
// req.open("GET","https://swapi.dev/api/people/1")
// req.send()

// fetch now a second request after the first one has resolved
// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//     console.log('Resolved !!!',res)
//     return res.json()
// })
// .then((data) => {
//     console.log('data',data)
//     return fetch("https://swapi.dev/api/people/2")
// })
// .then((res) => {
//     console.log("2nd request resolved!!")
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log('error !!',err);
// })
// Since fetch returns promises we can use async and await
// let loadStarWars=async() => {
//     try{
//         let res=await fetch("https://swapi.dev/api/people/1")
//         let data=await res.json();
//         console.log("data",data)
//         let res2=await fetch('https://swapi.dev/api/people/2');
//         let data2=await res2.json()
//         console.log('data2',data2)s
//     }catch(e){
//         console.log('error !!!',e)
//     }
    
// }
// loadStarWars()

// axios.get("https://swapi.dev/api/people/1")
// .then((data) => {
//     console.log("data : ",data)
// })
// .catch((e) => {
//     console.log("error !!",e)
// })

// let loadStarWar = async(id)=>{
//     try{
//         let res=await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res.data)
//     }catch(e){
//         console.log('error !!',e)
//     }
    
// }
// loadStarWar(5)
// loadStarWar(19)

// Configuring headers in axios
let dadjoke=async ()=>{
    try{
        let config={headers:{Accept:'application/json'}}
        let res=await axios.get('https://icanhazdadjoke.com/',config)
        return res.data.joke
    }catch(e)
    {
        console.log('error!!',e);
        return 'No jokes available at the moment api error'
    }
}

let button=document.querySelector('.button')
button.addEventListener('click',async function(){
    let ul=document.querySelector('#jokes');
    let li=document.createElement('li');
    let joke =await dadjoke();
    li.innerText=joke;
    ul.append(li);
})
