window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let lastTime;

let canvas =
  /** @type{HTMLCanvasElement} */
  (document.getElementById("pong"));

let game = new GameEngine(canvas);

let paddle1 = new PaddlePlayer(10, canvas.height / 2 - 40, 10, 80);
let paddle2 = new AiPaddle(canvas.width - 20, canvas.height / 2 - 80, 10, 80);
let ball = new Ball(canvas.width / 2, canvas.height / 2, 7);

let gameManager = new GameManager();

game.push(paddle1);
game.push(paddle2);
game.push(ball);
game.push(gameManager);

document.addEventListener("keydown", (event) => {
  GameEngine.pressedKeys.add(event.key);
});

document.addEventListener("keyup", (event) => {
  GameEngine.pressedKeys.delete(event.key);
});

/**
 * Animates the screen
 * @param {number} dt
 * @param {GameEngine} game
 */
function animate(now, game) {
  if (!lastTime) {
    lastTime = now;
  }

  let dt = (now - lastTime) / 1000;

  game.update(dt);

  lastTime = now;

  game.draw();

  requestAnimationFrame(function (now) {
    animate(now, game);
  });
}

requestAnimationFrame(function (now) {
  animate(now, game);
});
