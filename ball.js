/**
 * @class
 * @public
 * @extends Ball
 */
class Ball extends Sprite {
  constructor(x, y, r, color = "#FFF") {
    super();
    this.position = new Vector2d(x, y);
    this.r = r;
    this.color = color;
    let velx = Math.sign(randomNumber(-1, 1)) * randomNumber(0.2, 5);
    let vely = Math.sign(randomNumber(-1, 1)) * randomNumber(0.5, 5);
    this.velocity = new Vector2d(velx, vely).normalizeInplace();

    this.speed = 500;
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.closePath();
  }

  /**
   * @param {number} dt
   */
  update(dt) {
    this.position.addVecInplace(this.velocity.multiply(this.speed * dt));
    if (
      this.position.y + this.r >= canvas.height ||
      this.position.y - this.r <= 0
    ) {
      this.velocity.y *= -1;
    }
  }
}
