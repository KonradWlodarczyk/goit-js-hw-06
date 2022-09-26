const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  const addIngredient = document.createElement('li');
  addIngredient.innerText = ingredient;
  addIngredient.classList.add("item");
  ingredientsList.appendChild(addIngredient);
}