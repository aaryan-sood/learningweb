const button=document.querySelector('#v2');

button.onclick=function() { 
    console.log('Hey you clicked me');
    console.log('Stop it!!');

}

function scream()
{
    console.log('Hi you are entering in my area through your mouse!!');
    console.log('Hi!can you stop it');
}

button.onmouseenter=scream;

document.querySelector('h1').onclick=() => {
    console.log('Hi what are you doing clicking a H1');
    console.log('Hey can you please stop doing that!');
}