export { addClickHandlerToNavItems };

const addClickHandlerToNavItems = () => {
  document.querySelector(".list").addEventListener("click", (e) => {
    if (e.target.classList.contains("list__link")) {
      let clickedItem = e.target;
      removeSelectedItem();
      addActiveClass(clickedItem);
    }
  });
};

const removeSelectedItem = () => {
  let navItems = document.querySelectorAll(".list .list__link");
  navItems.forEach((item) => {
    item.classList.remove("list__link--active");
  });
};

const addActiveClass = (clickedItem) => {
  clickedItem.classList.add("list__link--active");
};
addClickHandlerToNavItems();
