var CatsKids = CatsKids || {};

CatsKids.GameNumbers = new Kiwi.State( "GameNumbers" );

CatsKids.GameNumbers.create = function () {

	Kiwi.State.prototype.create.call( this );

	self = this;

	self.cl = new Kiwi.Sound.Audio(self.game, 'audioCl', 1, false);
	self.ick = new Kiwi.Sound.Audio(self.game, 'audioIck', 1, false);

    self.gridX = 1920 / 24;
    self.gridY = 1080 / 16;

	self.background = new Kiwi.GameObjects.StaticImage( self, self.textures.background, 0, 0 );
	self.addChild( self.background );

	self.back = new Kiwi.GameObjects.Sprite(self, self.textures.uiAtlas, (self.gridX * 2) - 105, (self.gridY * 2) - 105);
	self.back.animation.switchTo( 17 );
	self.back.input.onDown.add( self.buttonDown, self );
	self.back.input.onUp.add( self.buttonClickedBack, self );
	self.addChild( self.back );

	self.sprites = [];

	self.one = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 6, self.gridY * 5 );
	self.one.animation.switchTo( 30 );
	self.one.input.onUp.add( function() { self.numberClick(1, self.one); }, self );
	self.sprites.push(self.one);

	self.two = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 12, self.gridY * 5 );
	self.two.animation.switchTo( 31 );
	self.two.input.onUp.add( function() { self.numberClick(2, self.two); }, self );
	self.sprites.push(self.two);

	self.three = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 18, self.gridY * 5 );
	self.three.animation.switchTo( 32 );
	self.three.input.onUp.add( function() { self.numberClick(3, self.three); }, self );
	self.sprites.push(self.three);

	do {
		self.randomNumber = Math.floor(Math.random() * 10);
	} while (self.randomNumber > 3 || self.randomNumber == 0);

	for(var i = 0; i < self.randomNumber; i++) {
		duck = new Kiwi.GameObjects.Sprite( self, self.textures.animalsAtlas, self.gridX * 6 * (i + 1), self.gridY * 13 );
		duck.animation.switchTo( 6 );
		duck.scale = 0.4;
		self.sprites.push(duck);
	}



	for(var i = 0; i < self.sprites.length; i++) {
		// console.log(self.animals[i]);
		self.sprites[i].x = self.positionSpriteX(self.sprites[i].x, self.sprites[i].width);
		self.sprites[i].y = self.positionSpriteY(self.sprites[i].y, self.sprites[i].height);
		self.addChild( self.sprites[i] );
	}
};

CatsKids.GameNumbers.buttonClickedBack = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex - 1);
	self.ick.play();
	self.game.states.switchState('Intro');
};

CatsKids.GameNumbers.buttonDown = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex + 1);
	self.cl.play();
};

CatsKids.GameNumbers.numberClick = function (chosenNumber, obj) {
	if(chosenNumber == self.randomNumber) {
		var tween = self.game.tweens.create(obj);
		tween.to({scaleX: 1.5, scaleY: 1.5}, 600, Kiwi.Animations.Tweens.Easing.Linear.In, true);
		tween.start();
	}
};

CatsKids.GameNumbers.positionSpriteX = function (positionX, width) {
	return (positionX - ( width / 2 ));
};

CatsKids.GameNumbers.positionSpriteY = function (positionY, height) {
	return (positionY - ( height / 2 ));
};