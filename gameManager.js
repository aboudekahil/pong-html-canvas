var totCount = 0;
var negCount = 0;
/**
 *
 * @class
 * @public
 * @extends {Sprite}
 */
class GameManager extends Sprite {
  constructor() {
    super();
    this.score1 = 0;
    this.score2 = 0;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();

    ctx.font = "30px Monospace";

    ctx.fillText(this.score1, 50, 50);
    ctx.fillText(this.score2, canvas.width - 50, 50);

    ctx.closePath();
  }

  /**
   * Resets the ball
   */
  resetBall() {
    ball.position = new Vector2d(canvas.width / 2, canvas.height / 2);
    let velx = Math.sign(randomNumber(-1, 1)) * randomNumber(0.2, 5);
    let vely = Math.sign(randomNumber(-1, 1)) * randomNumber(0.5, 5);
    ball.velocity = new Vector2d(velx, vely).normalizeInplace();
    totCount++;
    negCount += velx < 0;
    console.log(negCount / totCount);
  }

  /**
   * Checks if won and handles it
   */
  checkWin() {
    let win1 = ball.position.x >= canvas.width;
    let win2 = ball.position.x <= 0;

    if (win1 || win2) {
      this.score1 += win1;
      this.score2 += win2;
      this.resetBall();
      paddle1.position.x = 10;
      paddle2.position.x = canvas.width - 10 - paddle2.size.x / 2;
      paddle1.position.y = canvas.height / 2 - paddle1.size.y / 2;
      paddle2.position.y = canvas.height / 2 - paddle2.size.y / 2;
    }

    return win1 || win2;
  }

  /**
   * @param {number} dt
   */
  update(dt) {
    if (this.checkWin()) {
      if (this.score1 == 10 || this.score2 == 10) {
      }
      return;
    }

    paddle1.checkBallCollision(ball);
    paddle2.checkBallCollision(ball);
  }
}
