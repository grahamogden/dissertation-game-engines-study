//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameMatch = function(game) {};

CatsKids.GameMatch.prototype = {
	create: function() {
		this.background = this.add.sprite(0,0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

        var tileGridX = (this.game.width) / 24;
        var tileGridY = (this.game.height) / 16;

		this.back = this.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', this.goMainMenu, this, 'back_down.png', 'back.png');
		this.back.anchor.set(0.5);
		this.back.onDownSound = audioCl;
		this.back.onUpSound = audioIck;
	},
	update: function() {

	},
	goMainMenu: function() {
		this.game.state.start('MainMenu');
	}
};