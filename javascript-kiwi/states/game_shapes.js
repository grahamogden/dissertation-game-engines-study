 var CatsKids = CatsKids || {};

CatsKids.GameShapes = new Kiwi.State( "GameShapes" );

CatsKids.GameShapes.create = function () {

	Kiwi.State.prototype.create.call( this );

	self = this;

	self.cl = new Kiwi.Sound.Audio(self.game, 'audioCl', 1, false);
	self.ick = new Kiwi.Sound.Audio(self.game, 'audioIck', 1, false);

    self.gridX = 1920 / 24;
    self.gridY = 1080 / 16;

	self.setupGame();
};

CatsKids.GameShapes.buttonClickedBack = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex - 1);
	self.ick.play();
	self.game.states.switchState('Intro');
};

CatsKids.GameShapes.buttonDown = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex + 1);
	self.cl.play();
};

CatsKids.GameShapes.fixPosition = function (obj, shapeNumber) {
	self.ick.play();
	console.log(obj);
	console.log(obj.physics);
	console.log(obj.physics.overlaps(self.holeShape, true));

	if ( (shapeNumber == self.shapeNumHole) && (obj.physics.overlaps(self.holeShape, true)) ) {
			obj.destroy();
			self.holeShape.animation.switchTo(self.shapesInfo[shapeNumber][1]);
			self.holeShape.scale = 1.2;
			setTimeout(function() {
				self.restartLevel();
			}, 1500);
	} else {
		obj.x = self.selectedShapeInfo[0];
		obj.y = self.selectedShapeInfo[1];
	}
};

CatsKids.GameShapes.positionSpriteX = function (positionX, width, scaleX) {
	return (positionX - ( width / 2 ));
};

CatsKids.GameShapes.positionSpriteY = function (positionY, height, scaleY) {
	return (positionY - ( height / 2 ));
};

CatsKids.GameShapes.restartLevel = function () {
	// this.game.states.switchState('GameShapes');
	self.background = null;
	self.back = null;
	self.shapesInfo = null;
	self.shapes = null;
	self.selectedShapeInfo = null;
	self.shapeNumHole = null;
	self.shapeNumber = null;
	self.holeShape = null;
	self.circle = null;
	self.triange = null;
	self.square = null;
	obj = null;
	self.setupGame();
};

CatsKids.GameShapes.selectShape = function (obj, pointer) {
	self.selectedShapeInfo = [obj.x, obj.y];
	console.log(self.selectedShapeInfo);
};

CatsKids.GameShapes.setupGame = function() {

	self.background = new Kiwi.GameObjects.StaticImage( self, self.textures.background, 0, 0 );
	self.addChild( self.background );

	self.back = new Kiwi.GameObjects.Sprite(self, self.textures.uiAtlas, (self.gridX * 2) - 105, (self.gridY * 2) - 105);
	self.back.animation.switchTo( 17 );
	self.back.input.onDown.add( self.buttonDown, self );
	self.back.input.onUp.add( self.buttonClickedBack, self );
	self.addChild( self.back );

	for(var i = 0; i < self.textures.shapesAtlas.cells.length; i++) {
		console.log(i + ' - ' + self.textures.shapesAtlas.cells[i].name);
		// console.log(self.textures.shapesAtlas.cells[i]);
	}

	// the shape, whether it has been placed yet, the animation frame number for its 'hole' counterpart, shape is moving
	self.shapesInfo = [
		['circle', 0, false, 1],
		['triangle', 2, false, 3],
		['square', 4, false, 5]
	];

	self.shapes = [];
	self.selectedShapeInfo = [];

	do {
		self.shapeNumHole = Math.floor(Math.random() * 10);
		console.log(self.shapeNumHole);
	} while (self.shapeNumHole > 2);
	console.log('*****************************************************************************');
	console.log(self.shapeNumHole);
	self.shapeHole = self.shapesInfo[self.shapeNumHole][3];
	console.log(self.shapeHole);

	self.holeShape = new Kiwi.GameObjects.Sprite( self, self.textures.shapesAtlas, self.gridX * 12, self.gridY * 12 );
	self.holeShape.animation.switchTo( self.shapeHole );
	self.holeShape.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.holeShape.width, self.holeShape.height );
	self.holeShape.physics = self.holeShape.components.add( new Kiwi.Components.ArcadePhysics( self.holeShape, self.holeShape.box ) );
	self.shapes.push(self.holeShape);

	self.circle = new Kiwi.GameObjects.Sprite( self, self.textures.shapesAtlas, self.gridX * 6,  self.gridY * 4 );
	self.circle.animation.switchTo( 0 );
	self.circle.input.enableDrag();
	self.circle.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.circle.width, self.circle.height );
	self.circle.physics = self.circle.components.add( new Kiwi.Components.ArcadePhysics( self.circle, self.circle.box ) );
	self.circle.input.onDown.add( self.selectShape, self );
	self.circle.input.onUp.add( function() { self.fixPosition(self.circle, 0); }, self );
	self.shapes.push(self.circle);

	self.triangle = new Kiwi.GameObjects.Sprite( self, self.textures.shapesAtlas,  self.gridX * 12,  self.gridY * 4 );
	self.triangle.animation.switchTo( 2 );
	self.triangle.input.enableDrag();
	self.triangle.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.triangle.width, self.triangle.height );
	self.triangle.physics = self.triangle.components.add( new Kiwi.Components.ArcadePhysics( self.triangle, self.triangle.box ) );
	self.triangle.input.onDown.add( self.selectShape, self );
	self.triangle.input.onUp.add( function() { self.fixPosition(self.triangle, 1); }, self );
	self.shapes.push(self.triangle);

	self.square = new Kiwi.GameObjects.Sprite( self, self.textures.shapesAtlas,  self.gridX * 18,  self.gridY * 4 );
	self.square.animation.switchTo( 4 );
	self.square.input.enableDrag();
	self.square.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.square.width, self.square.height );
	self.square.physics = self.square.components.add( new Kiwi.Components.ArcadePhysics( self.square, self.square.box ) );
	self.square.input.onDown.add( self.selectShape, self );
	self.square.input.onUp.add( function() { self.fixPosition(self.square, 2); }, self );
	self.shapes.push(self.square);

	for(var i = 0; i < self.shapes.length; i++) {
		// console.log(self.shapes[i]);
		self.shapes[i].x = self.positionSpriteX(self.shapes[i].x, self.shapes[i].width);
		self.shapes[i].y = self.positionSpriteY(self.shapes[i].y, self.shapes[i].height);
		self.addChild( self.shapes[i] );
	}
}