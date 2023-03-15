// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const boxView = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  boxView.innerHTML = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  if(counterValue <= 0)
  counterValue = 0;

  boxView.innerHTML = counterValue;
};

btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);