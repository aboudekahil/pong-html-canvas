
/**
    * Animates the screen
    * @param {GameEngine} game 
    */
function animate(game) {
    game.update();
    game.draw();

    requestAnimationFrame(function() {
        animate(game);
    });
}

function init(){
    let canvas = /** @type{HTMLCanvasElement} */ 
        (document.getElementById("pong"));
    let game = new GameEngine(canvas);
    animate(game);
}

window.onload = init;
