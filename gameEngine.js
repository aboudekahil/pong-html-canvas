/**
 * @typedef {"Playing" | "Paused" | "Won"} GameState
 */

/**
 * GameEngine class is used to handle the funcitonalities of the game.
 *
 * @class
 * @constructor
 * @public
 */
class GameEngine {
  /** @type{Set<string>} */
  static pressedKeys = new Set();

  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    /**
     * @type{HTMLCanvasElement}
     * @private
     */
    this.canvas = canvas;

    /**
     * @type{CanvasRenderingContext2D}
     * @private
     */
    this.ctx = this.canvas.getContext("2d");

    /**
     * @type{Sprite[]}
     * @private
     */
    this.spriteArray = [];

    /** @type {GameState} */
    this.gameState = "Playing";

    this.pKeyWasPressed = false;
  }

  clear() {
    this.ctx.beginPath();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.closePath();
  }

  fillCanvas(color) {
    this.ctx.beginPath();

    this.ctx.fillStyle = color;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.closePath();

    this.ctx.fill();
  }

  push(sprite) {
    this.spriteArray.push(sprite);
  }

  update(dt) {
    if (this.gameState === "Won") {
      if (GameEngine.pressedKeys.has("Enter")) {
        gameManager.resetGame();
      }
      return;
    }

    if (GameEngine.pressedKeys.has("p")) {
      if (!this.pKeyWasPressed) {
        this.gameState = this.gameState === "Paused" ? "Playing" : "Paused";
        this.pKeyWasPressed = true; // Set the flag to true to prevent rapid toggling
      }
    } else {
      // Reset the flag when "p" key is released
      this.pKeyWasPressed = false;
    }

    if (this.gameState === "Playing") {
      for (const sprite of this.spriteArray) {
        sprite.update(dt);
      }
    }
  }

  draw() {
    switch (this.gameState) {
      case "Playing":
        this.clear();
        this.fillCanvas("#000");
        for (const sprite of this.spriteArray) {
          sprite.draw(this.ctx);
        }
        break;
      case "Paused":
        this.ctx.beginPath();
        this.ctx.fillStyle = "#FFF";
        this.ctx.font = "40px Monospace";
        this.ctx.fillText(
          `Paused`,
          this.canvas.width / 2 - 70,
          this.canvas.height / 2,
        );
        this.ctx.fill();
        this.ctx.closePath();
        break;
      case "Won":
        this.ctx.beginPath();
        this.ctx.fillStyle = "#FFF";
        this.ctx.font = "40px Sans";
        this.ctx.fillText(
          `Player ${(gameManager.score2 > gameManager.score1) + 1} won`,
          this.canvas.width / 2 - 120,
          this.canvas.height / 2,
        );
        this.ctx.fill();
        this.ctx.closePath();
        break;
    }
  }
}
