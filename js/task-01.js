const ListWithId = document.querySelectorAll(".item");
const NumberOfCategories = ListWithId.length;
console.log(`Number of categories: ${NumberOfCategories}`);

ListWithId.forEach((Element) => {
  console.log(`Category: ${Element.firstElementChild.textContent}`);
  console.log(`Elements: ${Element.querySelectorAll("li").length}`);
});
