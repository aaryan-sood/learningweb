const button=document.querySelector('button');
const h1=document.querySelector('h1');

button.addEventListener('click',function() {
    const newColor=makeColor();
    const bodyele=document.querySelector('body');
    bodyele.style.backgroundColor=``;
    h1.innerText=`${newColor}`;
})

makeColor= () => {
    let red=Math.floor(Math.random() * 256 );
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}
