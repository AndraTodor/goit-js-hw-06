const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
