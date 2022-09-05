const header = document.querySelector(".header");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.toggle("navbarDark");
  }
};
