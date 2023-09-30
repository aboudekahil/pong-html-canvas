/**
 * @extends Sprite
 */
class PaddlePlayer extends Sprite {
  constructor(x, y, w, h, color = "#FFF") {
    super();

    /** @type {Vector2d} */
    this.position = new Vector2d(x, y);

    /** @type {Vector2d} */
    this.size = new Vector2d(w, h);

    /** @type {Vector2d} */
    this.color = color;

    /** @type{number} */
    this.speed = 400;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    ctx.fill();

    ctx.closePath();
  }

  /**
   * @param {number} dt
   */
  update(dt) {
    if (GameEngine.pressedKeys.has("w")) {
      this.position.y -= this.speed * dt;
    }
    if (GameEngine.pressedKeys.has("s")) {
      this.position.y += this.speed * dt;
    }

    this.position.y = Math.max(this.position.y, 0);
    this.position.y = Math.min(this.position.y, canvas.height - this.size.y);
  }

  /**
   * Check collision with ball and handle it
   *
   * @param {Ball} ball
   */
  checkBallCollision(ball) {
    let ballLeft = ball.position.x - ball.r;
    let isInHeight =
      this.position.y <= ball.position.y &&
      this.position.y + this.size.y >= ball.position.y;

    if (
      this.position.x <= ballLeft &&
      this.position.x + this.size.x >= ballLeft &&
      isInHeight
    ) {
      ball.velocity.x *= -1;
    }
  }
}

/**
 * @class
 * @public
 * @extends Sprite
 */
class AiPaddle extends Sprite {
  constructor(x, y, w, h, color = "#FFF") {
    super();
    this.position = new Vector2d(x, y);
    this.size = new Vector2d(w, h);
    this.color = color;
    this.speed = 400;
  }

  update(dt) {
    if (
      ball.position.y > this.position.y + this.size.y / 2 &&
      Math.random() <= 0.5
    ) {
      this.position.y += this.speed * dt;
    } else if (
      ball.position.y < this.position.y + this.size.y / 2 &&
      Math.random() <= 0.98
    ) {
      this.position.y -= this.speed * dt;
    }
  }

  draw(ctx) {
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    ctx.fill();

    ctx.closePath();
  }

  /**
   * Check collision with ball and handle it
   *
   * @param {Ball} ball
   */
  checkBallCollision(ball) {
    let ballRight = ball.position.x + ball.r;
    let isInHeight =
      this.position.y <= ball.position.y &&
      this.position.y + this.size.y >= ball.position.y;

    if (
      this.position.x <= ballRight &&
      this.position.x + this.size.x >= ballRight &&
      isInHeight
    ) {
      ball.velocity.x *= -1;
    }
  }
}
