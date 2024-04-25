const makeRandColors=()=>{
    let red=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
}

let buttons=document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click',colorize);
}

let h1=document.querySelectorAll('h1');
for(let top of h1){
    top.addEventListener('click',function(){
        this.style.color=makeRandColors();
    });
}

function colorize(){
    this.style.backgroundColor=makeRandColors();
    this.style.color=makeRandColors();
}