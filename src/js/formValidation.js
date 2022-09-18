export { validate };

const btnSubmit = document.querySelector(".contacts__button");

const validate = (e) => {
  e.preventDefault();

  const firstNameField = document.getElementById("name");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
};

btnSubmit.addEventListener("click", validate);
