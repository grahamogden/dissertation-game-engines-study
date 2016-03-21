//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.Boot = function(game){};

CatsKids.Boot.prototype = {
	preload: function() {
		this.load.image('logo', 'assets/images/logo.png');
		this.load.image('preloadBar', 'assets/images/preload-bar.png');
	},
	create: function() {
		this.game.stage.backgroundColor = '#FFFFFF';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.maxWidth = 1920;
		this.scale.maxHeight = 1080;
		this.scale.pageAlignHorizontally = true;
		this.scale.updateLayout(true);
		this.scale.refresh();

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.state.start('Preload');
	}
};