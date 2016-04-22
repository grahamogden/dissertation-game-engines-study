var CatsKids = CatsKids || {};

CatsKids.Intro = new Kiwi.State( "Intro" );

/**
* IntroState manages main-menu functionality for your game.
* Generally this State would switch to other sub 'states'
* which would handle the individual features. 
*  
* Right now we are just switching straight to the PlayState.
*/


CatsKids.Intro.create = function () {

	Kiwi.State.prototype.create.call( this );

	this.cl = new Kiwi.Sound.Audio(this.game, 'audioCl', 1, false);
	this.ick = new Kiwi.Sound.Audio(this.game, 'audioIck', 1, false);

    this.gridX = 1920 / 24;
    this.gridY = 1080 / 16;

    this.i = 0;

	// game.states.switchState( "Play" );

	this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
	this.addChild( this.background );

	this.tileAnimals = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0 );
	this.tileColouring = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0 );
	this.tileMatch = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0 );
	this.tileNumbers = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0 );
	this.tileShapes = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0 );

	this.tileAnimals.x = this.getUIX(175);
	this.tileAnimals.y = this.getUIY(175);
	this.tileColouring.x = this.getUIX(175);
	this.tileColouring.y = this.getUIY(175);
	this.tileMatch.x = this.getUIX(175);
	this.tileMatch.y = this.getUIY(175);
	this.tileNumbers.x = this.getUIX(175);
	this.tileNumbers.y = this.getUIY(175);
	this.tileShapes.x = this.getUIX(175);
	this.tileShapes.y = this.getUIY(175);

	// console.log(this.textures.uiAtlas.cells);
	// for(var i = 0; i < this.textures.uiAtlas.cells.length; i++) {
	// 	console.log(i + ' - ' + this.textures.uiAtlas.cells[i].name);
	// }

	this.tileAnimals.input.onDown.add( this.buttonDown, this, 'Animals' );
	this.tileAnimals.input.onUp.add( this.buttonClickedAnimals, this, 'Animals' );
	this.tileColouring.input.onDown.add( this.buttonDown, this, 'Colouring' );
	this.tileColouring.input.onUp.add( this.buttonClickedColouring, this, 'Colouring' );
	this.tileMatch.input.onDown.add( this.buttonDown, this, 'Match' );
	this.tileMatch.input.onUp.add( this.buttonClickedMatch, this, 'Match' );
	this.tileNumbers.input.onDown.add( this.buttonDown, this, 'Numbers' );
	this.tileNumbers.input.onUp.add( this.buttonClickedNumbers, this, 'Numbers' );
	this.tileShapes.input.onDown.add( this.buttonDown, this, 'Shapes' );
	this.tileShapes.input.onUp.add( this.buttonClickedShapes, this, 'Shapes' );

	this.tileAnimals.animation.switchTo( 20 );
	this.tileColouring.animation.switchTo( 22 );
	this.tileMatch.animation.switchTo( 24 );
	this.tileNumbers.animation.switchTo( 26 );
	this.tileShapes.animation.switchTo( 28 );

	this.addChild( this.tileAnimals );
	this.addChild( this.tileColouring );
	this.addChild( this.tileMatch );
	this.addChild( this.tileNumbers );
	this.addChild( this.tileShapes );


	// this.background.input.onUp.add( this.buttonClicked, this, 'background' );
};

// CatsKids.Intro.buttonClicked = function (obj, pointer, nom) {
// 	obj.animation.switchTo(obj.cellIndex - 1);
// 	this.ick.play();
// 	console.log(obj);
// 	console.log(pointer);
// 	console.log(nom);
// 	this.game.states.switchState('Game' + nom);
// };

CatsKids.Intro.buttonDown = function (obj, pointer, nom) {
	// console.log(nom);
	obj.animation.switchTo(obj.cellIndex + 1);
	this.cl.play();
};

CatsKids.Intro.buttonClickedAnimals = function (obj, pointer, nom) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	// console.log(obj);
	// console.log(pointer);
	// console.log(nom);
	this.game.states.switchState('GameAnimals');
};

CatsKids.Intro.buttonClickedColouring = function (obj, pointer, nom) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	// console.log(obj);
	// console.log(pointer);
	// console.log(nom);
	this.game.states.switchState('GameColouring');
};

CatsKids.Intro.buttonClickedMatch = function (obj, pointer, nom) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	// console.log(obj);
	// console.log(pointer);
	// console.log(nom);
	this.game.states.switchState('GameMatch');
};

CatsKids.Intro.buttonClickedNumbers = function (obj, pointer, nom) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	// console.log(obj);
	// console.log(pointer);
	// console.log(nom);
	this.game.states.switchState('GameNumbers');
};

CatsKids.Intro.buttonClickedShapes = function (obj, pointer, nom) {
	obj.animation.switchTo(obj.cellIndex - 1);
	this.ick.play();
	// console.log(obj);
	// console.log(pointer);
	// console.log(nom);
	this.game.states.switchState('GameShapes');
};


CatsKids.Intro.getUIX = function (width) {
	return ( this.gridX * ( ( this.i % 3 ) * 6 ) + ( 6 * this.gridX ) ) - width;
}

CatsKids.Intro.getUIY = function (height) {
	// Calculate each row for every three tiles
	var j = Math.floor(this.i / 3) + 1;
	this.i = this.i + 1;
	return (this.gridY * (6 * j) ) - height;
}