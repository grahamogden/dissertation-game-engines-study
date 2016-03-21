//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameAnimals = function(game) {};

CatsKids.GameAnimals.prototype = {
	create: function() {
		this.background = this.add.sprite(0,0, 'animalsBackground');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

        var tileGridX = (this.game.width) / 24;
        var tileGridY = (this.game.height) / 16;

		this.back = this.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', this.goMainMenu, this, 'back_down.png', 'back.png');
		this.back.anchor.set(0.5);
		this.back.onDownSound = audioCl;
		this.back.onUpSound = audioIck;

		audioAnimals = this.game.add.audio('audioAnimals');
		audioAnimals.allowMultiple = false;

		audioAnimals.addMarker('horse.png', 0, 2.9);
		audioAnimals.addMarker('dog.png', 3, 1.2);
		audioAnimals.addMarker('sheep.png', 4.4, 1.5);
		audioAnimals.addMarker('pig.png', 14.4, 1.8);
		audioAnimals.addMarker('chicken.png', 25.3, 3.2);
		audioAnimals.addMarker('cow.png', 28.5, 3);
		audioAnimals.addMarker('duck.png', 31.6, 2.4);

		this.horse = this.add.button(1220, 450, 'animals', this.animalSound, this, 'horse.png', 'horse.png');
		this.horse.scale.set(0.35);
		this.horse.anchor.set(0.5);
		// this.horse.frameName = 'horse.png';
		this.cow = this.add.button(270, 450, 'animals', this.animalSound, this, 'cow.png', 'cow.png');
		this.cow.scale.set(-0.35, 0.35);
		this.cow.anchor.set(0.5);
		// this.cow.frameName = 'cow.png';
		this.sheep = this.add.button(710, 510, 'animals', this.animalSound, this, 'sheep.png', 'sheep.png');
		this.sheep.scale.set(0.45);
		this.sheep.anchor.set(0.5);
		// this.sheep.frameName = 'sheep.png';
		this.pig = this.add.button(1620, 630, 'animals', this.animalSound, this, 'pig.png', 'pig.png');
		this.pig.scale.set(0.55);
		this.pig.anchor.set(0.5);
		// this.pig.frameName = 'pig.png';
		this.duck = this.add.button(980, 730, 'animals', this.animalSound, this, 'duck.png', 'duck.png');
		this.duck.scale.set(0.5);
		this.duck.anchor.set(0.5);
		// this.duck.frameName = 'duck.png';
		this.chicken = this.add.button(1240, 820, 'animals', this.animalSound, this, 'chicken.png', 'chicken.png');
		this.chicken.scale.set(0.5);
		this.chicken.anchor.set(0.5);
		// this.chicken.frameName = 'chicken.png';
		this.dog = this.add.button(300, 830, 'animals', this.animalSound, this, 'dog.png', 'dog.png');
		this.dog.scale.set(0.65);
		this.dog.anchor.set(0.5);
		// this.dog.frameName = 'dog.png';

	},
	update: function() {

	},
	animalSound: function(sprite) {
		audioAnimals.play(sprite.frameName);
	},
	goMainMenu: function() {
		this.game.state.start('MainMenu');
	}
};