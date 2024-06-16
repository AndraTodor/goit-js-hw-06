const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredinent) => {
  const ul = document.getElementById("ingredients");
  const liElement = document.createElement("li");
  liElement.textContent = ingredinent;
  ul.append(liElement);
});
