console.log("Script loaded!");

const form=document.querySelector("#shelterform");
form.addEventListener('submit',function (Event) {
    Event.preventDefault();
    console.log('submitted')
})
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("DOM fully loaded and parsed");
//     const form = document.querySelector('#shelterform');
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         console.log('Form submitted');
//     });
// });
