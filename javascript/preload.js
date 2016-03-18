//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.Preload = function(game) {
	this.preloadBar = null;
	this.ready = false;
};

CatsKids.Preload.prototype = {
	preload: function() {
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY-50, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX - ( this.game.cache.getImage('preloadBar').width / 2 ), this.game.world.centerY+80, 'preloadBar');

		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('background', 'assets/images/background.png');
		this.load.image('animalsBackground', 'assets/images/animals_background.png');
		this.load.atlas('uiButtons', 'assets/images/ui_spritesheet.png', 'assets/images/ui_spritesheet.json');
		this.load.atlas('animals', 'assets/images/animals_spritesheet.png', 'assets/images/animals_spritesheet.json');
		this.load.atlas('shapes', 'assets/images/shapes_spritesheet.png', 'assets/images/shapes_spritesheet.json');
		this.load.audio('audioAnimals', 'assets/audio/animals.mp3');
		this.load.audio('audioCl', 'assets/audio/cl.mp3');
		this.load.audio('audioIck', 'assets/audio/ick.mp3');
	},
	create: function() {
		this.state.start('MainMenu');
	}
};