const registerForm = document.querySelector(".login-form");

const fnForm = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const inputLogin = form.elements.email.value;
  const inputPas = form.elements.password.value;
  if (inputLogin === "" || inputPas === "") {
    return alert("Please fill in all the fields!");
  }
  const formObj = {
    email: inputLogin,
    password: inputPas,
  };
  console.log(formObj);
  form.reset();
};
registerForm.addEventListener("submit", fnForm);
