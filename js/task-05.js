var nameInput = document.querySelector("#name-input");
var nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
  var newName = nameInput.value;

  if (newName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = newName;
  }
});
