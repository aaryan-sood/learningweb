
const form=document.querySelector("#shelterform");
const input=document.querySelector('#catname');
const ul=document.querySelector('#cats');

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const li=document.createElement('li');
    li.innerText=input.value;
    input.value='';
    ul.append(li);
})



