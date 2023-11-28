const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//

const list = ingredients
  .map((el) => {
    return `<li class="item">${el}</li>`;
  })
  .join("\n");
const ul = document
  .querySelector("#ingredients")
  .insertAdjacentHTML("beforeend", list);
console.log(list);
