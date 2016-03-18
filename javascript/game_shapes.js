//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameShapes = function() {};

CatsKids.GameShapes.prototype = {
	create: function() {
		selfGame = this;
		this.background = this.add.sprite(0,0, 'background');
		this.background.width = selfGame.game.width;
		this.background.height = selfGame.game.height;
		this.background.alpha = 0.3;

        tileGridX = (selfGame.game.width) / 24;
        tileGridY = (selfGame.game.height) / 16;

        //Drawing a grid for positioning

        var graphics = this.game.add.graphics(0, 0);
	    graphics.beginFill(0xFFFFFF);
	    graphics.lineStyle(2, 0xFFFFFF, 1);
	    
        for(var j = 0; j < 25; j++){
        	graphics.drawRect(((tileGridX * j)/* - 1*/), 0, 1, 1920);
        }
        for(var j = 0; j < 20; j++){
        	graphics.drawRect(0, ((tileGridY * j)/* - 1*/), 1920, 1);
        }

		back = this.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', this.goMainMenu, this, 'back_down.png', 'back.png');
		back.anchor.set(0.5);
		back.onDownSound = audioCl;
		back.onUpSound = audioIck;

		shapes = [
			['circle', false],
			['triangle', false],
			['square', false]
		];

		this.setupGame();
    	window.graphics = graphics;

	},
	update: function() {

	},
	fixLocation: function(selectedShape) {
		var lowerXlimit = selfGame.game.world.centerX - 300;
		var upperXLimit = selfGame.game.world.centerX + 300;
		var lowerYLimit = ( tileGridY * 12 ) - 300;
		var upperYLimit = ( tileGridY * 12 ) + 300;

		var boundsShape = selectedShape.getBounds();
    	var boundsHole = holeShape.getBounds();

		if ( (shapeInformation[0] == holeShapeNumber) && (Phaser.Rectangle.intersects(boundsShape, boundsHole)) ) {
				selectedShape.kill();
				holeShape.frameName = shapes[holeShapeNumber][0];
				holeShape.scale.set(1.2);
				setTimeout(function() {
					selfGame.restartLevel();
				}, 1500);
		} else {
			selectedShape.x = shapeInformation[1];
			selectedShape.y = shapeInformation[2];
		}

	},
	goMainMenu: function() {
		selfGame.game.state.start('MainMenu');
	},
	restartLevel: function () {
		selfGame.game.state.start(selfGame.game.state.current);
	},
	saveShapeInfo: function(selectedShape, pointer, shapeX, shapeY, shapeNumber) {
		shapeInformation = [shapeNumber, shapeX, shapeY];
	},
	setupGame: function () {
        holeShapeNumber = selfGame.game.rnd.integerInRange(0, 2);
        holeShape = this.add.sprite(selfGame.game.world.centerX, tileGridY * 12, 'shapes');
        holeShape.anchor.set(0.5);
        holeShape.frameName = shapes[holeShapeNumber][0] + '_hole';

        for(var i = 0; i < shapes.length; i++) {
        	do {
        		shapeNumber = selfGame.game.rnd.integerInRange(0, 2);
        	} while (shapes[shapeNumber][1] === true);

        	shapes[shapeNumber][1] = true;

			var shape = this.add.sprite(tileGridX * (6 * (i + 1)), tileGridY * 4, 'shapes');
			shape.frameName = shapes[shapeNumber][0];
			shape.anchor.set(0.5);
	        shape.inputEnabled = true;
	        shape.input.enableDrag();
	        shape.events.onDragStart.add(this.saveShapeInfo, this, null, shapeNumber);
	        shape.events.onDragStop.add(this.fixLocation, this, null, shapeNumber);
	    }
	}
};