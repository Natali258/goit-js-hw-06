const inputText = document.querySelector("#name-input");
const spanBox = document.querySelector("#name-output");

let spanText = "";
const getTextInput = (evt) => {
  spanText = evt.target.value;

  if (evt.target.value === "") {
    spanText = "Anonymous";
  }
  spanBox.textContent = spanText;
};

inputText.addEventListener("input", getTextInput);
