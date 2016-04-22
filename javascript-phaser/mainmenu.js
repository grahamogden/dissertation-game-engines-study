//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.MainMenu = function(game) {
	var audioClick;
    var tileGridX;
    var tileGridY;
};

CatsKids.MainMenu.prototype = {
	create: function() {
		selfGame = this;
		tileGridX = (selfGame.game.width) / 24;
    	tileGridY = (selfGame.game.height) / 16;
    	console.log(tileGridX);
    	console.log(tileGridY);

		selfGame.background = selfGame.add.sprite(0,0, 'background');
		selfGame.background.width = selfGame.game.width;
		selfGame.background.height = selfGame.game.height;

        var graphics = selfGame.game.add.graphics(0, 0);
	    graphics.beginFill(0xFFFFFF);
	    graphics.lineStyle(2, 0xFFFFFF, 1);

        // for(var j = 0; j < 25; j++){
        // 	graphics.drawRect(((tileGridX * j)/* - 1*/), 0, 1, 1920);
        // }
        // for(var j = 0; j < 20; j++){
        // 	graphics.drawRect(0, ((tileGridY * j)/* - 1*/), 1920, 1);
        // }
		audioClick = selfGame.game.add.audio('audioClick');
		audioClick.allowMultiple = true;
		audioCl = selfGame.game.add.audio('audioCl');
		audioCl.allowMultiple = true;
		audioIck = selfGame.game.add.audio('audioIck');
		audioIck.allowMultiple = true;

		/*selfGame.back = selfGame.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', selfGame.goLogin, selfGame, 'back_down.png', 'back.png');
		selfGame.back.anchor.set(0.5);
		selfGame.back.onDownSound = audioCl;
		selfGame.back.onUpSound = audioIck;*/
		// selfGame.settings = selfGame.add.button(tileGridX * 22, tileGridY * 2, 'uiButtons', selfGame.goSettings, selfGame, 'settings_down.png', 'settings.png');
		selfGame.settings = selfGame.add.sprite(tileGridX * 22, tileGridY * 2, 'uiButtons');
		selfGame.settings.frameName = 'settings.png';
		selfGame.settings.inputEnabled = true;
		selfGame.settings.anchor.set(0.5);
		selfGame.settings.onDownSound = audioCl;
		selfGame.settings.onUpSound = audioIck;
		selfGame.isSettingsPressed = false;
		selfGame.settings.events.onInputDown.add(function() {
			selfGame.isSettingsPressed = true;
			selfGame.settings.frameName = 'settings_down_5.png';
		}, selfGame);
		settingsTimer = 0;
		selfGame.settings.events.onInputUp.add(function() {
			settingsTimer = 0;
			selfGame.isSettingsPressed = false;
			selfGame.settings.frameName = 'settings.png';
		}, selfGame);

        var i = 0;

		selfGame.animalTile = selfGame.add.button(getX(), getY(), 'uiButtons', selfGame.startGameAnimals, selfGame, 'tile_animals_down.png', 'tile_animals.png');
		selfGame.colouringTile = selfGame.add.button(getX(), getY(), 'uiButtons', selfGame.startGameColouring, selfGame, 'tile_colouring_down.png', 'tile_colouring.png');
		selfGame.matchTile = selfGame.add.button(getX(), getY(), 'uiButtons', selfGame.startGameMatch, selfGame, 'tile_match_down.png', 'tile_match.png');
		selfGame.numbersTile = selfGame.add.button(getX(), getY(), 'uiButtons', selfGame.startGameNumbers, selfGame, 'tile_numbers_down.png', 'tile_numbers.png');
		selfGame.shapesTile = selfGame.add.button(getX(), getY(), 'uiButtons', selfGame.startGameShapes, selfGame, 'tile_shapes_down.png', 'tile_shapes.png');

		selfGame.animalTile.anchor.set(0.5);
		selfGame.colouringTile.anchor.set(0.5);
		selfGame.matchTile.anchor.set(0.5);
		selfGame.numbersTile.anchor.set(0.5);
		selfGame.shapesTile.anchor.set(0.5);

		selfGame.animalTile.onDownSound = audioCl;
		selfGame.animalTile.onUpSound = audioIck;
		selfGame.colouringTile.onDownSound = audioCl;
		selfGame.colouringTile.onUpSound = audioIck;
		selfGame.matchTile.onDownSound = audioCl;
		selfGame.matchTile.onUpSound = audioIck;
		selfGame.numbersTile.onDownSound = audioCl;
		selfGame.numbersTile.onUpSound = audioIck;
		selfGame.shapesTile.onDownSound = audioCl;
		selfGame.shapesTile.onUpSound = audioIck;

	    function getX() {
	    	console.log( tileGridX * ( ( i % 3 ) * 6 ) + ( 6 * tileGridX ) );
	        return ( tileGridX * ( ( i % 3 ) * 6 ) + ( 6 * tileGridX ) );
	        
	    }

	    function getY() {
	    	// Calculate each row for every three tiles
	        var j = Math.floor(i / 3) + 1;
	    	console.log((tileGridY * (6 * j) ));
	        i = i + 1;
	        return (tileGridY * (6 * j) );
	    }
    	window.graphics = graphics;
	},
	update: function() {
		if(selfGame.isSettingsPressed === true) {
			settingsTimer++;
			if( (settingsTimer % 60 == 0) ) {
				selfGame.settings.frameName = 'settings_down_' + (5 - Math.floor(settingsTimer / 60) ) + '.png';
				audioCl.play();
			}
			if(settingsTimer == 300) {
				selfGame.goSettings();
			}
		}
	},
	startGameAnimals: function() {
		selfGame.game.state.start('GameAnimals');
	},
	startGameColouring: function() {
		selfGame.game.state.start('GameColouring');
	},
	startGameMatch: function() {
		selfGame.game.state.start('GameMatch');
	},
	startGameNumbers: function() {
		selfGame.game.state.start('GameNumbers');
	},
	startGameShapes: function() {
		selfGame.game.state.start('GameShapes');
	},
	goLogin: function() {
		selfGame.game.state.start('Login');
	},
	goSettings: function(button) {
		selfGame.game.state.start('Settings');
	}
};