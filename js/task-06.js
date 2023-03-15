// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.


let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.onblur = function() {
  if (inputVal.value.length >= intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else {
    inputVal.classList.add("invalid");
    inputVal.classList.remove("valid");
  }
};