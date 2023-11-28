function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let num = 0;
const isNum = (evt) => {
  num = evt.target.value;
};
inputNum.addEventListener("input", isNum);

const clickCreate = (evt) => {
  createBoxes(num);
};
createBtn.addEventListener("click", clickCreate);

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement("div");
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.marginTop = "20px";
    boxes.appendChild(divElement);
  }
}

const clickDestroy = (evt) => {
  destroyBoxes();
};
destroyBtn.addEventListener("click", clickDestroy);
function destroyBoxes() {
  boxes.innerHTML = "";
  inputNum.value = "";
}
