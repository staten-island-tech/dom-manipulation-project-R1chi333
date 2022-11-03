const DOMSelectors = {
  button: document.getElementById("btn"),
  container: document.getElementById("container"),
  input: document.querySelector(`#input`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.container.insertAdjacentHTML("afterend", `<p>${input}</p>`);
});

DOMSelectors.button.addEventListener("click", function () {
  const test = Object.create(test);
});
