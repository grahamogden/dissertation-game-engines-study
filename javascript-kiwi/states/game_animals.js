var CatsKids = CatsKids || {};

CatsKids.GameAnimals = new Kiwi.State( "GameAnimals" );

CatsKids.GameAnimals.create = function () {

	Kiwi.State.prototype.create.call( this );

	this.cl = new Kiwi.Sound.Audio(this.game, 'audioCl', 1, false);
	this.ick = new Kiwi.Sound.Audio(this.game, 'audioIck', 1, false);
	this.audioAnimals = new Kiwi.Sound.Audio(this.game, 'audioAnimals', 1, true);
	this.audioAnimals.addMarker('horse', 0, 2.9);
	this.audioAnimals.addMarker('dog', 3, 4.2);
	this.audioAnimals.addMarker('sheep', 4.4, 5.9);
	this.audioAnimals.addMarker('pig', 14.4, 16.2);
	this.audioAnimals.addMarker('chicken', 25.3, 28.5);
	this.audioAnimals.addMarker('cow', 28.5, 31.5);
	this.audioAnimals.addMarker('duck', 31.6, 34.6);

    this.gridX = 1920 / 24;
    this.gridY = 1080 / 16;

	this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.backgroundAnimals, 0, 0 );
	this.addChild( this.background );

	this.back = new Kiwi.GameObjects.Sprite(this, this.textures.uiAtlas, (this.gridX * 2) - 105, (this.gridY * 2) - 105);
	this.back.animation.switchTo( 17 );
	this.back.input.onDown.add( this.buttonDown, this );
	this.back.input.onUp.add( this.buttonClickedBack, this );
	this.addChild( this.back );

	for(var i = 0; i < this.textures.animalsAtlas.cells.length; i++) {
		console.log(i + ' - ' + this.textures.animalsAtlas.cells[i].name);
		// console.log(this.textures.animalsAtlas.cells[i]);
	}

	this.animals = [];

	this.horse = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 1220, 450 );
	this.horse.animation.switchTo( 15 );
	this.horse.scale = 0.35;
	this.horse.input.onUp.add( this.playSoundHorse, this );
	this.animals.push(this.horse);

	this.cow = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 270, 450 );
	this.cow.animation.switchTo( 18 );
	this.cow.scaleX = -0.35;
	this.cow.scaleY = 0.35;
	this.cow.input.onUp.add( this.playSoundCow, this );
	this.animals.push(this.cow);

	this.sheep = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 710, 510 );
	this.sheep.animation.switchTo( 3 );
	this.sheep.scale = 0.45;
	this.sheep.input.onUp.add( this.playSoundSheep, this );
	this.animals.push(this.sheep);

	this.pig = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 1620, 630 );
	this.pig.animation.switchTo( 9 );
	this.pig.scale = 0.55;
	this.pig.input.onUp.add( this.playSoundPig, this );
	this.animals.push(this.pig);

	this.duck = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 980, 730 );
	this.duck.animation.switchTo( 6 );
	this.duck.scale = 0.5;
	this.duck.input.onUp.add( this.playSoundDuck, this );
	this.animals.push(this.duck);

	this.chicken = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 1240, 820 );
	this.chicken.animation.switchTo( 0 );
	this.chicken.scale = 0.5;
	this.chicken.input.onUp.add( this.playSoundChicken, this );
	this.animals.push(this.chicken);

	this.dog = new Kiwi.GameObjects.Sprite( this, this.textures.animalsAtlas, 300, 830 );
	this.dog.animation.switchTo( 12 );
	this.dog.scale = 0.65;
	this.dog.input.onUp.add( this.playSoundDog, this );
	this.animals.push(this.dog);


	for(var i = 0; i < this.animals.length; i++) {
		// console.log(this.animals[i]);
		this.animals[i].x = this.positionSpriteX(this.animals[i].x, this.animals[i].width);
		this.animals[i].y = this.positionSpriteY(this.animals[i].y, this.animals[i].height);
		this.addChild( this.animals[i] );
	}
	// this.horse.x = this.PositionX(1220, this., );
	// this.horse.y = this.PositionY(450, , );
	// this.cow.x = this.PositionX(270, , );
	// this.cow.y = this.PositionY(450, , );
	// this.sheep.x = this.PositionX(710, , );
	// this.sheep.y = this.PositionY(510, , );
	// this.pig.x = this.PositionX(1620, , );
	// this.pig.y = this.PositionY(630, , );
	// this.duck.x = this.PositionX(980, , );
	// this.duck.y = this.PositionY(730, , );
	// this.chicken.x = this.PositionX(1240, , );
	// this.chicken.y = this.PositionY(820, , );
	// this.dog.x = this.PositionX(300, , );
	// this.dog.y = this.PositionY(830, , );

	// this.horse.scale = 0.35;
	// this.cow.scaleX = -0.35;
	// this.cow.scaleY = 0.35
	// this.sheep.scale = 0.45;
	// this.pig.scale = 0.55;
	// this.duck.scale = 0.5;
	// this.chicken.scale = 0.5;
	// this.dog.scale = 0.65;

	// this.horse.input.onUp.add( this.playSound, this );
	// this.cow.input.onUp.add( this.playSound, this );
	// this.sheep.input.onUp.add( this.playSound, this );
	// this.pig.input.onUp.add( this.playSound, this );
	// this.duck.input.onUp.add( this.playSound, this );
	// this.chicken.input.onUp.add( this.playSound, this );
	// this.dog.input.onUp.add( this.playSound, this );

	// this.addChild( this.horse );
	// this.addChild( this.cow );
	// this.addChild( this.sheep );
	// this.addChild( this.pig );
	// this.addChild( this.duck );
	// this.addChild( this.chicken );
	// this.addChild( this.dog );
};

CatsKids.GameAnimals.buttonClickedBack = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	this.game.states.switchState('Intro');
};

CatsKids.GameAnimals.buttonDown = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex + 1);
	this.cl.play();
};

CatsKids.GameAnimals.playSoundCow = function (obj, pointer) {
	this.audioAnimals.play( 'cow', true );
};

CatsKids.GameAnimals.playSoundDog = function (obj, pointer) {
	this.audioAnimals.play( 'dog', true );
};

CatsKids.GameAnimals.playSoundChicken = function (obj, pointer) {
	this.audioAnimals.play( 'chicken', true );
};

CatsKids.GameAnimals.playSoundDuck = function (obj, pointer) {
	this.audioAnimals.play( 'duck', true );
};

CatsKids.GameAnimals.playSoundPig = function (obj, pointer) {
	this.audioAnimals.play( 'pig', true );
};

CatsKids.GameAnimals.playSoundSheep = function (obj, pointer) {
	this.audioAnimals.play( 'sheep', true );
};

CatsKids.GameAnimals.playSoundHorse = function (obj, pointer) {
	this.audioAnimals.play( 'horse', true );
};

CatsKids.GameAnimals.positionSpriteX = function (positionX, width) {
	return (positionX - ( width / 2 ));
};

CatsKids.GameAnimals.positionSpriteY = function (positionY, height) {
	return (positionY - ( height / 2 ));
};