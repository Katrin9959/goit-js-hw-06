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


  let ulList = document.getElementById("ingredients");
  const foodIngredients = ingredients.forEach(ingredient => {
    let items = document.createElement("li");
  //  li.classList.add('item')
  // li.classList.toggle("item")
    items.innerHTML = ingredient;
    ulList.append(items);
    
  });
  
  console.log(foodIngredients);