const myLink = 'https://wa.me/';
let input = document.getElementById("myInput");
let button = document.getElementById("myButton");


    
function formatKyrgyzNumber(inputId) {
    // const input = document.getElementById(inputId);
    if (!input) return;

    // Берём значение
    let num = input.value;

    // Убираем всё кроме цифр
    num = num.replace(/\D/g, "");

    // Если начинается с 0 — убираем
    if (num.startsWith("0")) {
        num = num.substring(1);
    }

    // Добавляем код страны
    num = "996" + num;

    // Записываем обратно в инпут
    console.log("before: "+input.value);
    input.value = num;
    console.log("after: "+input.value);

    return num;
};


function myLinkOpen() {
    open(myLink+input.value);
    console.log('btn clicked');
};

function inputValue(){
    input.addEventListener(onchange, console.log('input value: '+input.value));
};


