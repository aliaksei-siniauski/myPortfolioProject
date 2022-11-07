export { changeScrollPosition, scrollToHeader };
import { addClickHandlerToNavItems } from "./Nav.js";

const changeScrollPosition = () => {
  const header = document.querySelector(".header");
  let scrollColor = "#1e2761";
  let backgroundColor = "#320d3e";
  let top = window.scrollY;
  if (top >= 100) {
    header.style.backgroundColor = `${scrollColor}`;
  } else {
    header.style.backgroundColor = `${backgroundColor}`;
  }
};

const scrollToHeader = () => {
  const scrollUp = document.querySelector(".icon-arrow");
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};
scrollToHeader();
window.onscroll = changeScrollPosition;
