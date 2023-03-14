// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній,у спані повинен відображатися рядок "Anonymous".




let input = document.getElementById("name-input");
let span = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       span.innerHTML = 'Anonymous';
    } else{
    span.innerHTML = input.value;
    }
}

