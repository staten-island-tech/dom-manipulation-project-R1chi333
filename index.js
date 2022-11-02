const DOMSelectors = {
  sectionA: document.getElementById("sectionA"),
  input: document.querySelector("#input"),
  button: document.getElementById("btn"),
};

DOMSelectors.button.addEventListener("click", function () {
  DOMSelectors.sectionA.insertAdjacentHTML("beforebegin", `<p>${input}</p>`);
});
