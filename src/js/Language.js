export { addClickHandlerToLangItems };

const addClickHandlerToLangItems = () => {
  document.querySelector(".languages").addEventListener("click", (e) => {
    if (e.target.classList.contains("language")) {
      let clickedItem = e.target;
      removeSelectedItem();
      addActiveClass(clickedItem);
    }
  });
};

const removeSelectedItem = () => {
  let navItems = document.querySelectorAll(".languages .language");
  navItems.forEach((item) => {
    item.classList.remove("language--active");
  });
};

const addActiveClass = (clickedItem) => {
  clickedItem.classList.add("language--active");
};
addClickHandlerToLangItems();
