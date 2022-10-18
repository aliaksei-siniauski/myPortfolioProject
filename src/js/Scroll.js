export { changeScrollPosition };

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

window.onscroll = changeScrollPosition;
