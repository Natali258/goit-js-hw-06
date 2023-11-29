function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const body = document.body;

const btnChangeColor = () => {
  const bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
  colorText.textContent = bodyColor;
};

btnClick.addEventListener("click", btnChangeColor);
