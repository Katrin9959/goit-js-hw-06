// Напиши скрипт, який змінює кольори фону елемента <body>
//  через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.onclick = () => {
  let color = getRandomHexColor();
 document.querySelector('body').style.backgroundColor = color;
 document.querySelector('span.color').innerHTML = color;
} 
