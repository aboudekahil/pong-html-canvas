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
}
