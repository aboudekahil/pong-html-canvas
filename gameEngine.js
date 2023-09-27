window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

/**
    * GameEngine class is used to handle the funcitonalities of the game.
    *
    * @class
    * @constructor
    * @public
    */
class GameEngine {

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
            * @type{(function(CanvasRenderingContext2D): void)[]}
            * @private
            */
        this.drawArray = [];
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

    update() {
    }

    draw() {
        this.clear();
        this.fillCanvas("#000");
    }
}


