const redOption = document.querySelector(".color-option.red");
const blueOption = document.querySelector(".color-option.blue");
const blueShoe = document.querySelector(".blue-shoe");
const redShoe = document.querySelector(".red-shoe");
const productOverviewSection = document.querySelector(".product-overview");
const priceTag = document.querySelector(".price-tag");

redOption.addEventListener("click", () => {
  if (redShoe.classList.contains("red-shoe-inactive-status")) {
    redShoe.classList.remove("red-shoe-inactive-status");
    redShoe.classList.add("red-shoe-active-status");
    blueShoe.classList.add("blue-shoe-inactive-status");
    blueShoe.classList.remove("blue-shoe-active-status");
    productOverviewSection.style.backgroundColor = "#d35246";
    priceTag.style.backgroundColor = "#c02244";
  }
});

blueOption.addEventListener("click", () => {
  if (blueShoe.classList.contains("blue-shoe-inactive-status")) {
    blueShoe.classList.remove("blue-shoe-inactive-status");
    blueShoe.classList.add("blue-shoe-active-status");
    redShoe.classList.add("red-shoe-inactive-status");
    redShoe.classList.remove("red-shoe-active-status");
    productOverviewSection.style.backgroundColor = "#f1ae04";
    priceTag.style.backgroundColor = "#1c477a";
  }
});
