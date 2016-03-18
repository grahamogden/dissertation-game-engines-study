//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.MainMenu = function(game) {
	var audioClick;
    var tileGridX;
    var tileGridY;
};

CatsKids.MainMenu.prototype = {
	create: function() {
		tileGridX = (this.game.width) / 24;
    	tileGridY = (this.game.height) / 16;

		this.background = this.add.sprite(0,0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

        var graphics = this.game.add.graphics(0, 0);
	    graphics.beginFill(0xFFFFFF);
	    graphics.lineStyle(2, 0xFFFFFF, 1);

        // for(var j = 0; j < 25; j++){
        // 	graphics.drawRect(((tileGridX * j)/* - 1*/), 0, 1, 1920);
        // }
        // for(var j = 0; j < 20; j++){
        // 	graphics.drawRect(0, ((tileGridY * j)/* - 1*/), 1920, 1);
        // }
		audioClick = this.game.add.audio('audioClick');
		audioClick.allowMultiple = true;
		audioCl = this.game.add.audio('audioCl');
		audioCl.allowMultiple = true;
		audioIck = this.game.add.audio('audioIck');
		audioIck.allowMultiple = true;

		/*this.back = this.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', this.goLogin, this, 'back_down.png', 'back.png');
		this.back.anchor.set(0.5);
		this.back.onDownSound = audioCl;
		this.back.onUpSound = audioIck;*/
		this.settings = this.add.button(tileGridX * 22, tileGridY * 2, 'uiButtons', this.goSettings, this, 'settings_down.png', 'settings.png');
		this.settings.anchor.set(0.5);
		this.settings.onDownSound = audioCl;
		this.settings.onUpSound = audioIck;
        var i = 0;

		this.animalTile = this.add.button(getX(), getY(), 'uiButtons', this.startGameAnimals, this, 'tile_animals_down.png', 'tile_animals.png');
		this.colouringTile = this.add.button(getX(), getY(), 'uiButtons', this.startGameColouring, this, 'tile_colouring_down.png', 'tile_colouring.png');
		this.matchTile = this.add.button(getX(), getY(), 'uiButtons', this.startGameMatch, this, 'tile_match_down.png', 'tile_match.png');
		this.numbersTile = this.add.button(getX(), getY(), 'uiButtons', this.startGameNumbers, this, 'tile_numbers_down.png', 'tile_numbers.png');
		this.shapesTile = this.add.button(getX(), getY(), 'uiButtons', this.startGameShapes, this, 'tile_shapes_down.png', 'tile_shapes.png');

		this.animalTile.anchor.set(0.5);
		this.colouringTile.anchor.set(0.5);
		this.matchTile.anchor.set(0.5);
		this.numbersTile.anchor.set(0.5);
		this.shapesTile.anchor.set(0.5);

		this.animalTile.onDownSound = audioCl;
		this.animalTile.onUpSound = audioIck;
		this.colouringTile.onDownSound = audioCl;
		this.colouringTile.onUpSound = audioIck;
		this.matchTile.onDownSound = audioCl;
		this.matchTile.onUpSound = audioIck;
		this.numbersTile.onDownSound = audioCl;
		this.numbersTile.onUpSound = audioIck;
		this.shapesTile.onDownSound = audioCl;
		this.shapesTile.onUpSound = audioIck;

	    function getX() {
	    	// console.log(( tileGridX * ( ( i % 3 ) * 6 ) + ( 6 * tileGridX ) ));
	        return ( tileGridX * ( ( i % 3 ) * 6 ) + ( 6 * tileGridX ) );
	    }

	    function getY() {
	    	// Calculate each row for every three tiles
	        var j = Math.floor(i / 3) + 1;
	    	// console.log((tileGridY * (6 * j) ));
	        i = i + 1;
	        return (tileGridY * (6 * j) );
	    }
    	window.graphics = graphics;
	},
	update: function() {
	},
	startGameAnimals: function() {
		this.game.state.start('GameAnimals');
	},
	startGameColouring: function() {
		this.game.state.start('GameColouring');
	},
	startGameMatch: function() {
		this.game.state.start('GameMatch');
	},
	startGameNumbers: function() {
		this.game.state.start('GameNumbers');
	},
	startGameShapes: function() {
		this.game.state.start('GameShapes');
	},
	goLogin: function() {
		this.game.state.start('Login');
	},
	goSettings: function() {
		this.game.state.start('Settings');
	}
};