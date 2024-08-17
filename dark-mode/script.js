const container = document.querySelector(".container");
const btn = document.querySelector(".dark-light-btn");
const btnIcon = document.querySelector(".dark-light-btn i");

btn.addEventListener("click", () => {
  container.classList.toggle("change");
  btnIcon.classList.toggle("fa-sun");
  btnIcon.classList.toggle("fa-moon");
});
