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

const btn3=document.querySelector('#v3');
btn3.addEventListener('click',()=> {console.log('Hello you clicked the third button!')})

function twist()
{
    console.log('TWIST');
}

function shout()
{
    console.log('Shout');
}

const tasButton=document.querySelector('#tas');
tasButton.onclick=twist;
tasButton.onclick=shout;
tasButton.addEventListener('click',twist);
tasButton.addEventListener('click',shout);