const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const valueNum = document.querySelector("#value");

let counterValue = 0;
const btnClick = (event) => {
  if (event.srcElement.dataset.action === "decrement") {
    counterValue += -1;
  }
  if (event.srcElement.dataset.action === "increment") {
    counterValue += 1;
  }
  valueNum.textContent = counterValue;
};

buttonMinus.addEventListener("click", btnClick);
buttonPlus.addEventListener("click", btnClick);
