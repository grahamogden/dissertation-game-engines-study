//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameMatch = function(game) {};

CatsKids.GameMatch.prototype = {
	create: function() {
		this.background = this.add.sprite(0,0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

		selfGame = this;

        var tileGridX = (this.game.width) / 24;
        var tileGridY = (this.game.height) / 16;

		selfGame.back = selfGame.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', selfGame.goMainMenu, this, 'back_down.png', 'back.png');
		selfGame.back.anchor.set(0.5);
		selfGame.back.onDownSound = audioCl;
		selfGame.back.onUpSound = audioIck;

		var graphics = selfGame.game.add.graphics(0, 0);
	    graphics.beginFill(0x000000);
        graphics.drawRect((tileGridX * 20 ), 0, (tileGridX * 4), selfGame.game.height);
        graphics.alpha = 0.6;

		animals = [
			['horse', false],
			['cow', false],
			['sheep', false],
			['pig', false],
			['dog', false],
			['chicken', false],
			['duck', false],
		];

		animalChoices = [];

        for(var i = 0; i < 4; i++) {
        	do {
        		animalChoice = selfGame.game.rnd.integerInRange(0, animals.length - 1);
        	} while (animals[animalChoice][1] === true);
	        var j = Math.floor(i / 2) + 1;
	        if(i >= 2) {
	        	var k = 1;
	        } else {
	        	var k = 2;
	        }
			var animalHole = selfGame.add.sprite(tileGridX * j * 6, tileGridY * j * 6, 'animals');
			animalHole.frameName = animals[animalChoice][0] + '_outline.png';
			animalHole.anchor.set(0.5);
			animalHole.scale.set(0.5);
			var animal = selfGame.add.sprite(tileGridX * 22, ( (selfGame.game.height / 5) * (i + 1) ), 'animals');
			animal.frameName = animals[animalChoice][0] + '.png';
	        animal.inputEnabled = true;
	        animal.input.enableDrag();
			animal.anchor.set(0.5);
			animal.scale.set(0.2);
			animals[animalChoice][1] = true;
			animalChoices.push(animalChoice);
		}
	},
	goMainMenu: function() {
		selfGame.game.state.start('MainMenu');
	},
	update: function() {

	}
};