document.addEventListener('click',function(Event){
    console.log(Event)
})
const input=document.querySelector('input');
// input.addEventListener('keyup',function(Event){
//     console.log('Keyup');
//     console.log(Event)
//     console.log(Event.key)
//     console.log(Event.code)
// })
// input.addEventListener('keydown',function(){
//     console.log('Keydown');
// })

window.addEventListener('keydown',function(Event){
    // console.log(Event.code);
    switch(Event.code)
    {
        case 'ArrowUp' : 
            console.log('Up')
            break;
        case 'ArrowDown':
            console.log('Down')
            break;
        case 'ArrowRight':
            console.log('Right');
            break;
        case 'ArrowLeft':
            console.log('Left');
            break;
        default:
            console.log("Ignored");
            
    }
})