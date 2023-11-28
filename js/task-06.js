const inputText = document.querySelector("input");

const removeFocusBtn = (evt) => {
  if (evt.target.value.length === Number(inputText.dataset.length)) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
};
inputText.addEventListener("input", removeFocusBtn);
