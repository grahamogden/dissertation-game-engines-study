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

		audioAnimals.addMarker('horse', 0, 2.9);
		audioAnimals.addMarker('dog', 3, 1.2);
		audioAnimals.addMarker('sheep', 4.4, 1.5);
		audioAnimals.addMarker('pig', 14.4, 1.8);
		audioAnimals.addMarker('chicken', 25.3, 3.2);
		audioAnimals.addMarker('cow', 28.5, 3);
		audioAnimals.addMarker('duck', 31.6, 2.4);

		this.horse = this.add.button(1220, 450, 'animals', this.animalSound, this, 'horse', 'horse');
		this.horse.scale.set(0.35);
		this.horse.anchor.set(0.5);
		// this.horse.frameName = 'horse';
		this.cow = this.add.button(270, 450, 'animals', this.animalSound, this, 'cow', 'cow');
		this.cow.scale.set(-0.35, 0.35);
		this.cow.anchor.set(0.5);
		// this.cow.frameName = 'cow';
		this.sheep = this.add.button(710, 510, 'animals', this.animalSound, this, 'sheep', 'sheep');
		this.sheep.scale.set(0.45);
		this.sheep.anchor.set(0.5);
		// this.sheep.frameName = 'sheep';
		this.pig = this.add.button(1620, 630, 'animals', this.animalSound, this, 'pig', 'pig');
		this.pig.scale.set(0.55);
		this.pig.anchor.set(0.5);
		// this.pig.frameName = 'pig';
		this.duck = this.add.button(980, 730, 'animals', this.animalSound, this, 'duck', 'duck');
		this.duck.scale.set(0.5);
		this.duck.anchor.set(0.5);
		// this.duck.frameName = 'duck';
		this.chicken = this.add.button(1240, 820, 'animals', this.animalSound, this, 'chicken', 'chicken');
		this.chicken.scale.set(0.5);
		this.chicken.anchor.set(0.5);
		// this.chicken.frameName = 'chicken';
		this.dog = this.add.button(300, 830, 'animals', this.animalSound, this, 'dog', 'dog');
		this.dog.scale.set(0.65);
		this.dog.anchor.set(0.5);
		// this.dog.frameName = 'dog';

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