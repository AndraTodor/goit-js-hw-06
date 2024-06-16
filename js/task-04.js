var counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueSpan = document.querySelector("#value");

decrementButton.addEventListener("click", function () {
  counterValue--;
  counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", function () {
  counterValue++;
  counterValueSpan.textContent = counterValue;
});
