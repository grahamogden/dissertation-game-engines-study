TurbulenzEngine = WebGLTurbulenzEngine.create({
    canvas: document.getElementById("game_canvas"),
    fillParent: true
});

var graphicsDevice = TurbulenzEngine.createGraphicsDevice({});


var draw2D = Draw2D.create({
	graphicsDevice: graphicsDevice
});

var r = 0.2, g = 0.2, b = 0.2, a = 1.0;
var bgColor = [r, g, b, a];

var x1 = 50;
var y1 = 50;
var x2 = graphicsDevice.width - 50;
var y2 = graphicsDevice.height - 50;

var rectangle = [x1, y1, x2, y2];

var drawObject = {
    color: [0.8, 0.0, 0.0, 1.0],
    destinationRectangle: rectangle
};

var sprite = Draw2DSprite.create({
    width: 100,
    height: 100,
    x: graphicsDevice.width / 2,
    y: graphicsDevice.height / 2,
    color: [1.0, 1.0, 1.0, 1.0],
    rotation: Math.PI / 4
});

var texture = graphicsDevice.createTexture({
    src: "assets/images/particle_spark.png",
    mipmaps: true,
    onload: function (texture)
    {
        if (texture)
        {
            sprite.setTexture(texture);
            sprite.setTextureRectangle([0, 0, texture.width, texture.height]);
        }
    }
});

var PI2 = Math.PI * 2;
var rotateAngle = Math.PI / 32;

var scale = [1, 1];

function update() {
	sprite.rotation += rotateAngle;
	sprite.rotation %= PI2; //Wrap rotation at PI * 2

	scale[0] = scale[1] = Math.cos(sprite.rotation) + 2;
	sprite.setScale(scale);

	if (graphicsDevice.beginFrame())
	{
		graphicsDevice.clear(bgColor, 1.0);
		/* Rendering code goes here */
		draw2D.begin(); // Opaque
		draw2D.draw(drawObject);
		draw2D.end();

		draw2D.begin('additive'); // Additive
		draw2D.drawSprite(sprite);
		draw2D.end();
		/* Rendering code ends here */
		graphicsDevice.endFrame();
	}
}

TurbulenzEngine.setInterval(update, 1000 / 60);