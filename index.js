const DOMSelectors = {
  button: document.getElementById("btn"),
  container: document.getElementById("container"),
  input: document.querySelector(`#input`),
  container2: document.getElementById("container2"),
  score: document.getElementById("score"),
  gameWindow: document.getElementById("game"),
  textinsidescore: document.getElementById("textinsidescore"),
  game: document.getElementById("ineedanelementomfg"),
  test: document.getElementById("test"),
};

let score = 0;
function getrandomnum(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  if (
    DOMSelectors.input.value === "luffyCat" ||
    DOMSelectors.input.value === "zoro" ||
    DOMSelectors.input.value === "perona"
  ) {
    function startgame() {
      let seconds = 0;
      function timer() {
        seconds++;
      }
      DOMSelectors.input.value = null;
      DOMSelectors.textinsidescore.insertAdjacentHTML(
        "afterend",
        `<p id="score2">score: ${score}</p>`
      );
      DOMSelectors.textinsidescore.insertAdjacentHTML(
        "afterend",
        `<p>target: ${input}</p>`
      );
      DOMSelectors.textinsidescore.insertAdjacentHTML(
        "afterend",
        `<p style="margin-bottom:3%">CLICK THE TARGET TO START</p>`
      );
      DOMSelectors.game.insertAdjacentHTML(
        "beforebegin",
        `<img style = "position:absolute; width:3%;" id="target" src="media/${input}.gif" alt="target">`
      );
      DOMSelectors.score.insertAdjacentHTML(
        "afterend",
        `<p id="stop" style = "position:fixed; top:85%; left:17%; border-style:solid; border-width:9px;
    border-color: #ffe4cc; padding:10px; box-shadow: 5px 5px #dec5af; border-radius: 25px; background-color: white;">END</p>`
      );
      const targets = {
        target: document.getElementById("target"),
      };
      let end = document.getElementById("stop");
      let score2 = document.getElementById("score2");
      let targetCoords = targets.target.getBoundingClientRect();
      console.log(targetCoords);
      targets.target.addEventListener("click", function () {
        score++;
        console.log(score);
        score2.textContent = `score: ${score}`;
        let top = getrandomnum(18, 80);
        let left = getrandomnum(27, 92);
        document.getElementById("target").style.top = `${top}%`;
        document.getElementById("target").style.left = `${left}%`;
      });
      end.addEventListener("click", function () {
        targets.target.remove();
        end.remove();
      });
    }
    startgame(), { once: true };
  }
});
