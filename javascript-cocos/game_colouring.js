//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameColouring = function(game) {};

CatsKids.GameColouring.prototype = {
	create: function() {
		selfGame = this;
		this.background = this.add.sprite(0,0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

        var tileGridX = (selfGame.game.width) / 24;
        var tileGridY = (selfGame.game.height) / 16;

		bmd = selfGame.game.add.bitmapData(tileGridX * 22, selfGame.game.height);
		bmd.backgroundColor = '#FFFFFF';
		bmd.addToWorld();
    	bmd.game.input.addMoveCallback(selfGame.paint, selfGame);

		selfGame.back = selfGame.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', selfGame.goMainMenu, this, 'back_down.png', 'back.png');
		selfGame.back.anchor.set(0.5);
		selfGame.back.onDownSound = audioCl;
		selfGame.back.onUpSound = audioIck;

		brush = selfGame.game.make.sprite(0, 0, 'uiButtons');
		brush.anchor.set(0.5);
		brush.scale.set(0.5);
		brush.frameName = 'brush_white.png';

        var graphics = selfGame.game.add.graphics(0, 0);
	    graphics.beginFill(0x000000);
        graphics.drawRect((tileGridX * 22 ), 0, (tileGridX * 2), selfGame.game.height);
        graphics.alpha = 0.6;

        colours = [
        	'black',
        	'blue',
        	'brown',
        	'orange',
        	'yellow',
        	'red',
        	'purple',
        	'pink',
        	'green',
        	'cyan',
        	'navy',
        	'white'
        ];

    	brushColours = [];

        for(var i = 0; i < colours.length; i++) {
			var brushColour = selfGame.add.button(tileGridX * 23, (selfGame.game.height / 13 * (i + 1) ), 'uiButtons', selfGame.colourPick, this, 'brush_' + colours[i] + '.png', 'brush_' + colours[i] + '.png');
			brushColour.anchor.set(0.5);

			if(i != (colours.length - 1) ) {
				brushColour.scale.set(0.4);
			} else {
				brushColour.scale.set(0.6);
			}

			brushColours.push(brushColour);
        }
    	window.graphics = graphics;
	},
	colourPick: function(button) {
		for(var i = 0; i < colours.length; i++) {
			brushColours[i].scale.set(0.4);
		}
		button.scale.set(0.6);
		brush.frameName = button.frameName;
	},
	goMainMenu: function() {
		bmd.destroy();
		selfGame.game.state.start('MainMenu');
	},
	paint: function(pointer, x, y) {
		if (pointer.isDown) {
			bmd.draw(brush, x, y);
		}
	},
	update: function() {
	}
};