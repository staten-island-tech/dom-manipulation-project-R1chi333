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
  casual: document.getElementById("casual"),
  timed: document.getElementById("timed"),
  targetList: document.getElementById("targetList"),
  modetitle: document.getElementById("modetitle")
};

let seconds = 60;
function countdown() {
  countdownnum.textContent = `${seconds}`;
  return seconds--;
};
let timer = 1
function times() {
  return timer = 2
}
function times2() {
  return timer = 1
}
let select = document.getElementById("select")
DOMSelectors.casual.addEventListener("click", function() {
  mode = 1;
  document.getElementById("casual").style.scale = "80%"
  document.getElementById("timed").style.scale = "100%"
  select.play();
  if (timer === 2) {
    timerr = document.getElementById("timer");
    time = document.getElementById("countdownnum");
    timerr.remove();
    countdownnum.remove();
    times2();
  }
})
DOMSelectors.timed.addEventListener("click", function() {
  mode = 2;
  select.play();
  document.getElementById("timed").style.scale = "80%"
  document.getElementById("casual").style.scale = "100%"
  if (timer === 1) {
    DOMSelectors.targetList.insertAdjacentHTML("afterend", `<p id="countdownnum">60</p>`)
    DOMSelectors.targetList.insertAdjacentHTML("afterend", `<h2 id="timer">Timer</h2>`)
    times();
  }
})
let score = 0;
function getrandomnum(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
let played = 0;
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  if (
    DOMSelectors.input.value === "luffyCat" ||
    DOMSelectors.input.value === "zoro" ||
    DOMSelectors.input.value === "perona"
  ) {
    function startgame() {
      if (played === 0) {
        if (mode === 2) {
          b = setInterval(countdown, 1000);
          countdown();
        };
        function a(){
          a = setInterval(a, 1)
          if(seconds < 0) {
            clearInterval(b);
            targets.target.remove();
          }
        }
        a();
        targetList.remove();
        played++;
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
      border-color: #ffe4cc; padding:10px; box-shadow: 5px 5px #dec5af; border-radius: 25px; background-color: white;">RESTART</p>`
        );
        const targets = {
          target: document.getElementById("target"),
        };
        let end = document.getElementById("stop");
        let score2 = document.getElementById("score2");
        let pop = document.getElementById("pop");
        targets.target.addEventListener("click", function () {
          pop.play();
          score++;
          score2.textContent = `score: ${score}`;
          let top = getrandomnum(18, 80);
          let left = getrandomnum(27, 92);
          document.getElementById("target").style.top = `${top}%`;
          document.getElementById("target").style.left = `${left}%`;
        });
        end.addEventListener("click", function () {
          location.reload();
        });
      }
      }
    startgame();
  }
});
