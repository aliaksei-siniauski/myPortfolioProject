export { addClickHandler };

const addClickHandler = () => {
  document.querySelector(".projects__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTag();
      selectClikedTag(clickedTag);
      if (
        clickedTag.textContent === "All" ||
        clickedTag.textContent === "Усе"
      ) {
        showAllProjects();
      } else {
        filterProjectsBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTag = () => {
  let tags = document.querySelectorAll(".projects__tags .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag--active");
    tag.classList.add("tag--bordered");
  });
};

const selectClikedTag = (clickedTag) => {
  clickedTag.classList.remove("tag--bordered");
  clickedTag.classList.add("tag--active");
};

const showAllProjects = () => {
  let projects = document.querySelectorAll(".projects-content .project");
  projects.forEach((project) => {
    project.classList.remove("project__hidden");
  });
};

const filterProjectsBySelectedTag = (selectedTag) => {
  let projects = document.querySelectorAll(".projects-content .project");
  projects.forEach((project) => {
    project.classList.add("project__hidden");
    project.querySelectorAll(".tag").forEach((tag) => {
      if (tag.textContent === selectedTag) {
        project.classList.remove("project__hidden");
      }
    });
  });
};

addClickHandler();
