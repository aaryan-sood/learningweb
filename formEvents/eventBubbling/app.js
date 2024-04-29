const button=document.querySelector('#changeColor');
const container=document.querySelector('#container');

button.addEventListener('click',function(event){
    container.style.backgroundColor=makeRandomColor();
    event.stopPropagation()
})

container.addEventListener('click',function(){
    container.classList.toggle('hide');
})

makeRandomColor=function () {
    const red=Math.floor(Math.random() * 256);
    const blue=Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
}