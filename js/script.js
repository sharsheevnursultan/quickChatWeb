const myLink = 'https://wa.me/';
let input = document.getElementById("myInput");
let button = document.getElementById("myButton");

function myLinkOpen() {
    open(myLink+input.value);
    console.log('btn clicked');
};

function inputValue(){
    input.addEventListener(onchange, console.log('input value: '+input.value));
    
};