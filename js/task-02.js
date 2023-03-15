const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


  // let ulList = document.getElementById("ingredients");
  //   ingredients.forEach(ingredient => {
  //   let items = document.createElement("li");
  //   items.classList.add('item')
 
  //   items.innerHTML = ingredient;
  //   ulList.append(items);
    
  // });

  let ulList = document.getElementById("ingredients");
  const elements = []
  ingredients.forEach(ingredient => {
      let items = document.createElement("li");
      items.innerHTML = ingredient
      items.classList.add('item')
      elements.push(items)
    })
    ulList.append(...elements);