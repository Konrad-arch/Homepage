console.log("Baw sie dobrze, ale nie psuj!");

const menuSections = document.querySelectorAll(".menu-section");
const menuTabs = document.querySelectorAll(".menu-tab");

const showInfo = (id) => {
  menuSections.forEach((section) => (section.style.display = "none"));
  menuTabs.forEach((tab) => tab.classList.remove("menu-tab-active"));

  document.getElementById(id).style.display = "block";

  const currentActiveButton = document.querySelector(`[data-id=${id}]`);
  currentActiveButton.classList.add("menu-tab-active");
};

let button = document.querySelector(".button-none");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeName.innerText = "jasne";
  } else {
    themeName.innerText = "ciemne";
  }
});
