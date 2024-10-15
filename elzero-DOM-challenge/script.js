const body = document.querySelector("body");
const header = document.createElement("header");
const elzeroLogoContainer = document.createElement("div");
const elzeroLogo = document.createTextNode("Elzero");
const menuItemsList = document.createElement("ul");
const mainContent = document.createElement("section");
const footer = document.createElement("footer");
const global = document.querySelector("*");

// Setting global styles
// global.style.cssText =
//   'margin: 0px; padding: 0px; font-family: monospace, "sans-serif"; box-sizing: border-box';

// -- Styling the body
body.style.cssText =
  'margin: 0px; padding: 0px; font-family: monospace, "sans-serif"; box-sizing: border-box; height: 100vh;';

// Styling the header

header.style.cssText =
  "display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0.3rem; box-sizing: border-box; height: 5%;";

// // Constructing and Styling Elzero logo
elzeroLogoContainer.style.cssText =
  "display: grid; place-items:center; text-align: center; padding: 0.4rem; color: #23a96e; font-size: 1.5rem;";
elzeroLogoContainer.appendChild(elzeroLogo);

// // Constructing and Styling the header menu items
menuItemsList.style.cssText =
  "width: 25%; display: flex; align-items: center; justify-content: space-between; list-style: none; padding:0px;";
menuItemsList.innerHTML =
  "<li>Home</li><li>About</li><li>Service</li><li>Contact</li>";

menuItemsList.childNodes[0].style.cssText = "color: #030303; padding: 0.4rem;";
menuItemsList.childNodes[1].style.cssText = "color: #030303; padding: 0.4rem;";
menuItemsList.childNodes[2].style.cssText = "color: #030303; padding: 0.4rem;";
menuItemsList.childNodes[3].style.cssText = "color: #030303; padding: 0.4rem;";

// // Constructing the header
header.appendChild(elzeroLogoContainer);
header.appendChild(menuItemsList);
body.appendChild(header);

// Styling the main content
mainContent.style.cssText =
  "background-color: #ececec; display: flex; flex-wrap: wrap; align-items: center;   align-content: space-evenly; justify-content: space-evenly; box-sizing: border-box; height: 90%";

// // Constructing the main block of the main content
const contentBlock = document.createElement("div");
// const blockNumberContainer = document.createElement("span");
// const blockNumber = document.createTextNode("1");
// blockNumberContainer.appendChild(blockNumber);
// // and so on ...

contentBlock.style.cssText =
  "display: grid; place-items: center; width: 30%; background-color: #fff; padding: 2.5rem 0px;";
contentBlock.innerHTML =
  '<span class = "product-number" style = "display:block; font-size: 1.5rem; font-weight: bolder;">1</span> <span class = "product-tag" style = "color: #0d0d0d; font-size: 0.8rem;">Product</span>';

mainContent.appendChild(contentBlock);
for (let i = 1; i < 15; ++i) {
  const newProductBlock = contentBlock.cloneNode(true);
  newProductBlock.childNodes[0].innerHTML = i + 1;
  mainContent.appendChild(newProductBlock);
}

body.appendChild(mainContent);

// Styling the footer;
const copyRight = document.createTextNode("Copyright 2024");
footer.appendChild(copyRight);

footer.style.cssText =
  "display: grid; place-items: center; color: #fff; height: 5%; background-color: #23a96e; font-size: 1.6rem;";

body.appendChild(footer);
