const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg .signup-special-btn");
const signUpBtnWorks = document.querySelector("form button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

signUpBtnWorks.addEventListener("click", (e) => {
  e.preventDefault();
});
