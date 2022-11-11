const formElement = document.querySelector(".form");
const formInput = formElement.querySelector("form__input");
const formError = formElement.querySelector(".form__input-error");

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

const showError = (input, errorMessage) => {
  input.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add(".form__input-error-active");
};

const hideError = (input) => {
  input.classList.remove("form__input_type_error");
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    // show error
    showError(formInput, formInput.validationMessage);
  } else {
    // hide error
    hideError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
