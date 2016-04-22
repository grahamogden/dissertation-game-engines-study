// var CatsKids = CatsKids || {};

var gameWidth  = 1920,
    gameHeight = 1080;
Crafty.init(gameWidth, gameHeight, document.getElementById('game_canvas'));
Crafty.audio.setChannels(1);
// Crafty.addEvent(this, window, "resize", setScale);

var gridX = 1920 / 24;
var gridY = 1080 / 16;

for(var j = 0; j < 25; j++){
    Crafty.e('Line, 2D, Canvas, Color, Persist').attr({x: (gridX * j), y: 0, w: 1, h: 1080}).color('#FFFFFF');
}
for(var j = 0; j < 20; j++){
    Crafty.e('Line, 2D, Canvas, Color, Persist').attr({x: 0, y: (gridY * j), w: 1920, h: 1}).color('#FFFFFF');
}

function positionCorrectionX (positionX, width) {
    return (positionX - ( width / 2 ));
}

function positionCorrectionY (positionY, height) {
    return (positionY - ( height / 2 ));
}

// setScale();

// function setScale () {
//     var scaleFactor = window.innerWidth / Crafty.viewport._width ;
//     //make sure it's not bigger than the height
//     if (scaleFactor * Crafty.viewport._height > window.innerHeight) {
//         scaleFactor = window.innerHeight / Crafty.viewport._height;
//     }
//     var stageStyle = Crafty.stage.elem.style;
//     stageStyle.transformOrigin = stageStyle.webkitTransformOrigin = stageStyle.mozTransformOrigin = "0 0";
//     stageStyle.transform = stageStyle.webkitTransform = stageStyle.mozTransform = "scale("+scaleFactor+")";
// }