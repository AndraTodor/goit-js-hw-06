const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function () {
  const inputLength = validationInput.value.length;
  const requiredLength = Number(validationInput.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
