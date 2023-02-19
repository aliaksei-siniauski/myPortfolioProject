export { switchMenu, closeMenu };
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".list");
const navItems = document.querySelectorAll(".list__item");
const body = document.querySelector("body");

const switchMenu = () => {
  setTimeout(() => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    navList.classList.toggle("open");
    body.classList.toggle("stop-scrolling");
  }, 300);
};
hamburger.addEventListener("click", switchMenu);

const closeMenu = () => {
  setTimeout(() => {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navList.classList.remove("open");
    body.classList.remove("stop-scrolling");
  }, 300);
};
navItems.forEach((el) => el.addEventListener("click", closeMenu));
