 var CatsKids = CatsKids || {};

CatsKids.GameMatch = new Kiwi.State( "GameMatch" );

CatsKids.GameMatch.create = function () {

	Kiwi.State.prototype.create.call( this );

	self = this;
	if (Kiwi.DEVICE.touch) {
		console.log('Touch device');
		self.pointer = this.game.input.touch.fingers[0];
	} else {
		console.log('Not a touch device');
		self.pointer = this.game.input.mouse;
	}

	self.cl = new Kiwi.Sound.Audio(self.game, 'audioCl', 1, false);
	self.ick = new Kiwi.Sound.Audio(self.game, 'audioIck', 1, false);

    self.gridX = 1920 / 24;
    self.gridY = 1080 / 16;

	self.setupGame();
};

CatsKids.GameMatch.buttonClickedBack = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex - 1);
	self.ick.play();
	self.game.states.switchState('Intro');
};

CatsKids.GameMatch.buttonDown = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex + 1);
	self.cl.play();
};

CatsKids.GameMatch.animalMoveEnd = function(objAnimal, objAnimalHole) {
	console.log(objAnimal.cellIndex);
	console.log(objAnimalHole.cellIndex);
	// console.log(objAnimal.physics);
	// console.log(objAnimal.physics.overlaps(objAnimalHole, true));

	if (objAnimal.physics.overlaps(objAnimalHole, true)) {
			objAnimalHole.animation.switchTo(objAnimal.cellIndex);
			objAnimal.destroy();
	} else {
		objAnimal.x = self.animalInformation.x;
		objAnimal.y = self.animalInformation.y;
	}
	self.animalInformation = null;
};

CatsKids.GameMatch.animalMoveStart = function(obj) {
	console.log(obj);
	self.animalInformation = obj;
	obj.scale = 0.5;
};

CatsKids.GameMatch.positionSpriteX = function (positionX, width) {
	return (positionX - ( width / 2 ));
};

CatsKids.GameMatch.positionSpriteY = function (positionY, height) {
	return (positionY - ( height / 2 ));
};

CatsKids.GameMatch.selectShape = function (obj, pointer) {
	self.selectedShapeInfo = [obj.x, obj.y];
};

CatsKids.GameMatch.setupGame = function() {

	self.background = new Kiwi.GameObjects.StaticImage( self, self.textures.background, 0, 0 );
	self.addChild( self.background );

	self.back = new Kiwi.GameObjects.Sprite(self, self.textures.uiAtlas, (self.gridX * 2) - 105, (self.gridY * 2) - 105);
	self.back.animation.switchTo( 17 );
	self.back.input.onDown.add( self.buttonDown, self );
	self.back.input.onUp.add( self.buttonClickedBack, self );
	self.addChild( self.back );



// Draw rectangle
	params = {
		state: this,
		width: (self.gridX * 4),
		height: 1080,
		x: (self.gridX * 20),
		y: 0,
		color: [ 0.0, 0.0, 0.0 ]
	};
	params.drawStroke = false;
	this.rectangleNoStroke = new Kiwi.Plugins.Primitives.Rectangle( params );

	this.addChild( this.rectangleNoStroke );

	for(var i = 0; i < self.textures.shapesAtlas.cells.length; i++) {
		console.log(i + ' - ' + self.textures.shapesAtlas.cells[i].name);
		// console.log(self.textures.shapesAtlas.cells[i]);
	}

	// the animal, its frame, its frame for the hole counterpart, whether the animal has already been placed
	self.animals = [
		['horse', 15, 16, false],
		['cow', 18, 19, false],
		['sheep', 3, 4, false],
		['pig', 9, 10, false],
		['dog', 12, 13, false],
		['chicken', 0, 1, false],
		['duck', 6, 7, false]
	];
	self.animalInformation = null;
	self.animalChoices = [];
	self.animalHoleChoices = [];

// First animal
	do {
		self.animalFirstChoice = Math.floor(Math.random() * 10);
		console.log(self.animalFirstChoice);
	} while (self.animalFirstChoice >= self.animals.length || self.animals[self.animalFirstChoice][3] === true);

	self.animalFirstHole = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 1 * 7), (self.gridY * 1 * 6) );
	self.animalFirstHole.animation.switchTo( self.animals[self.animalFirstChoice][2] );
	self.animalFirstHole.centerAnchorPoint();
	self.animalFirstHole.scale = 0.5;
	self.animalFirstHole.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalFirstHole.width, self.animalFirstHole.height );
	self.animalFirstHole.physics = self.animalFirstHole.components.add( new Kiwi.Components.ArcadePhysics( self.animalFirstHole, self.animalFirstHole.box ) );
	self.animalHoleChoices.push(self.animalFirstHole);

	self.animalFirst = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 22), ( (1080 / 5) * 1 ) );
	self.animalFirst.animation.switchTo( self.animals[self.animalFirstChoice][1] );
	self.animalFirst.centerAnchorPoint();
	self.animalFirst.scale = 0.2;
	self.animalFirst.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalFirst.width, self.animalFirst.height );
	self.animalFirst.physics = self.animalFirst.components.add( new Kiwi.Components.ArcadePhysics( self.animalFirst, self.animalFirst.box ) );
	self.animalFirst.input.enableDrag();
	self.animalFirst.input.onDown.add( function() { self.animalMoveStart(self.animalFirst); }, self);
	self.animalFirst.input.onUp.add( function() { self.animalMoveEnd(self.animalFirst, self.animalFirstHole); }, self);
	self.animals[self.animalFirstChoice][3] = true;
	self.animalChoices.push(self.animalFirst);

// Second animal
	do {
		self.animalSecondChoice = Math.floor(Math.random() * 10);
		console.log(self.animalSecondChoice);
	} while (self.animalSecondChoice >= self.animals.length || self.animals[self.animalSecondChoice][3] === true);

	self.animalSecondHole = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 2 * 7), (self.gridY * 1 * 6) );
	self.animalSecondHole.animation.switchTo( self.animals[self.animalSecondChoice][2] );
	self.animalSecondHole.centerAnchorPoint();
	self.animalSecondHole.scale = 0.5;
	self.animalSecondHole.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalSecondHole.width, self.animalSecondHole.height );
	self.animalSecondHole.physics = self.animalSecondHole.components.add( new Kiwi.Components.ArcadePhysics( self.animalSecondHole, self.animalSecondHole.box ) );
	self.animalHoleChoices.push(self.animalSecondHole);

	self.animalSecond = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 22), ( (1080 / 5) * 2 ) );
	self.animalSecond.animation.switchTo( self.animals[self.animalSecondChoice][1] );
	self.animalSecond.centerAnchorPoint();
	self.animalSecond.scale = 0.2;
	self.animalSecond.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalSecond.width, self.animalSecond.height );
	self.animalSecond.physics = self.animalSecond.components.add( new Kiwi.Components.ArcadePhysics( self.animalSecond, self.animalSecond.box ) );
	self.animalSecond.input.enableDrag();
	self.animalSecond.input.onDown.add( function() { self.animalMoveStart(self.animalSecond); }, self);
	self.animalSecond.input.onUp.add( function() { self.animalMoveEnd(self.animalSecond, self.animalSecondHole); }, self);
	self.animals[self.animalSecondChoice][3] = true;
	self.animalChoices.push(self.animalSecond);

// Third animal
	do {
		self.animalThirdChoice = Math.floor(Math.random() * 10);
		console.log(self.animalThirdChoice);
	} while (self.animalThirdChoice >= self.animals.length || self.animals[self.animalThirdChoice][3] === true);

	self.animalThirdHole = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 1 * 7), (self.gridY * 2 * 6) );
	self.animalThirdHole.animation.switchTo( self.animals[self.animalThirdChoice][2] );
	self.animalThirdHole.centerAnchorPoint();
	self.animalThirdHole.scale = 0.5;
	self.animalThirdHole.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalThirdHole.width, self.animalThirdHole.height );
	self.animalThirdHole.physics = self.animalThirdHole.components.add( new Kiwi.Components.ArcadePhysics( self.animalThirdHole, self.animalThirdHole.box ) );
	self.animalHoleChoices.push(self.animalThirdHole);

	self.animalThird = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 22), ( (1080 / 5) * 3 ) );
	self.animalThird.animation.switchTo( self.animals[self.animalThirdChoice][1] );
	self.animalThird.centerAnchorPoint();
	self.animalThird.scale = 0.2;
	self.animalThird.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalThird.width, self.animalThird.height );
	self.animalThird.physics = self.animalThird.components.add( new Kiwi.Components.ArcadePhysics( self.animalThird, self.animalThird.box ) );
	self.animalThird.input.enableDrag();
	self.animalThird.input.onDown.add( function() { self.animalMoveStart(self.animalThird); }, self);
	self.animalThird.input.onUp.add( function() { self.animalMoveEnd(self.animalThird, self.animalThirdHole); }, self);
	self.animals[self.animalThirdChoice][3] = true;
	self.animalChoices.push(self.animalThird);

// Forth animal
	do {
		self.animalForthChoice = Math.floor(Math.random() * 10);
		console.log(self.animalForthChoice);
	} while (self.animalForthChoice >= self.animals.length || self.animals[self.animalForthChoice][3] === true);

	self.animalForthHole = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 2 * 7), (self.gridY * 2 * 6) );
	self.animalForthHole.animation.switchTo( self.animals[self.animalForthChoice][2] );
	self.animalForthHole.centerAnchorPoint();
	self.animalForthHole.scale = 0.5;
	self.animalForthHole.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalForthHole.width, self.animalForthHole.height );
	self.animalForthHole.physics = self.animalForthHole.components.add( new Kiwi.Components.ArcadePhysics( self.animalForthHole, self.animalForthHole.box ) );
	self.animalHoleChoices.push(self.animalForthHole);

	self.animalForth = new Kiwi.GameObjects.Sprite(self, self.textures.animalsAtlas, (self.gridX * 22), ( (1080 / 5) * 4 ) );
	self.animalForth.animation.switchTo( self.animals[self.animalForthChoice][1] );
	self.animalForth.centerAnchorPoint();
	self.animalForth.scale = 0.2;
	self.animalForth.box.hitbox = new Kiwi.Geom.Rectangle( 0, 0, self.animalForth.width, self.animalForth.height );
	self.animalForth.physics = self.animalForth.components.add( new Kiwi.Components.ArcadePhysics( self.animalForth, self.animalForth.box ) );
	self.animalForth.input.enableDrag();
	self.animalForth.input.onDown.add( function() { self.animalMoveStart(self.animalForth); }, self);
	self.animalForth.input.onUp.add( function() { self.animalMoveEnd(self.animalForth, self.animalForthHole); }, self);
	self.animals[self.animalForthChoice][3] = true;
	self.animalChoices.push(self.animalForth);

	for(var i = 0; i < self.animalHoleChoices.length; i++) {
		self.animalHoleChoices[i].x = self.positionSpriteX(self.animalHoleChoices[i].x, self.animalHoleChoices[i].width);
		self.animalHoleChoices[i].y = self.positionSpriteY(self.animalHoleChoices[i].y, self.animalHoleChoices[i].height);
		console.log(self.animalHoleChoices[i]);
		self.addChild( self.animalHoleChoices[i] );
	}

	for(var i = 0; i < self.animalChoices.length; i++) {
		self.animalChoices[i].x = self.positionSpriteX(self.animalChoices[i].x, self.animalChoices[i].width);
		self.animalChoices[i].y = self.positionSpriteY(self.animalChoices[i].y, self.animalChoices[i].height);
		console.log(self.animalChoices[i]);
		self.addChild( self.animalChoices[i] );
	}

	// for(var j = 0; j < 25; j++){
	// 	paramsTwo = {
	// 		state: self,
	// 		width: 1,
	// 		height: 1080,
	// 		x: (self.gridX * j),
	// 		y: 0,
	// 		color: [ 1, 1, 1 ]
	// 	};
	// 	paramsTwo.drawStroke = false;
	// 	var line = new Kiwi.Plugins.Primitives.Rectangle( paramsTwo );
	// 	self.addChild( line );
	// }
	// for(var j = 0; j < 20; j++){
	// 	paramsThr = {
	// 		state: self,
	// 		width: 1920,
	// 		height: 1,
	// 		x: 0,
	// 		y: (self.gridX * j),
	// 		color: [ 1, 1, 1 ]
	// 	};
	// 	paramsThr.drawStroke = false;
	// 	var line = new Kiwi.Plugins.Primitives.Rectangle( paramsThr );
	// 	self.addChild( line );
	// }
};

CatsKids.GameMatch.update = function() {
	Kiwi.State.prototype.update.call( this );
	// console.log(self.animalInformation);
	if(self.animalInformation != null) {
		// console.log(self.animalInformation.x);
		// console.log(self.animalInformation.y);
		console.log(self.pointer);
		self.animalInformation.x = self.pointer.x - (self.animalInformation.width / 2);
		self.animalInformation.y = self.pointer.y - (self.animalInformation.height / 2);
	}
}