const inputSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const getInputSize = (evt) => {
  spanText.style.fontSize = evt.target.value + "px";
};
inputSizeControl.addEventListener("input", getInputSize);
