//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameMatch = function(game) {};

CatsKids.GameMatch.prototype = {
	animalMoveEnd: function(selectedAnimal, pointer, selectedAnimalNumber, animalChoiceNumber) {
		var boundsAnimal = selectedAnimal.getBounds();
    	var boundsHole = animalHoleChoices[selectedAnimalNumber].getBounds();

		if ( (animalInformation[0] == selectedAnimalNumber) && (Phaser.Rectangle.intersects(boundsAnimal, boundsHole)) ) {
				selectedAnimal.kill();
				console.log(animals);
				console.log(animals[selectedAnimalNumber]);
				console.log(animals[selectedAnimalNumber][0]);
				animalHoleChoices[selectedAnimalNumber].frameName = animals[animalChoiceNumber][0] + '.png';
				roundScore++;
				if(roundScore == 4) {
					setTimeout(function() {
						selfGame.restartLevel();
					}, 1500);
				}
		} else {
			selectedAnimal.x = animalInformation[1];
			selectedAnimal.y = animalInformation[2];
			selectedAnimal.scale.set(0.2);
		}
	},
	animalMoveStart: function(selectedAnimal, pointer, animalX, animalY, animalNumber) {
		animalInformation = [animalNumber, animalX, animalY];
		selectedAnimal.scale.set(0.5);
	},
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
		animalHoleChoices = [];
		roundScore = 0;

        for(var i = 0; i < 4; i++) {
        	do {
        		animalChoice = selfGame.game.rnd.integerInRange(0, animals.length - 1);
        	} while (animals[animalChoice][1] === true);
			
	        var j = Math.floor(i / 2) + 1;
	        if(i % 2 === 0) {
	        	var k = 2;
	        } else {
	        	var k = 1;
	        }
			var animalHole = selfGame.add.sprite(tileGridX * k * 7, tileGridY * j * 6, 'animals');
			animalHole.frameName = animals[animalChoice][0] + '_hole.png';
			animalHole.anchor.set(0.5);
			animalHole.scale.set(0.5);
			
			animalHoleChoices.push(animalHole);
			
			var animal = selfGame.add.sprite(tileGridX * 22, ( (selfGame.game.height / 5) * (i + 1) ), 'animals');
			animal.frameName = animals[animalChoice][0] + '.png';
			animal.anchor.set(0.5);
			animal.scale.set(0.2);
			animals[animalChoice][1] = true;
	        animal.inputEnabled = true;
	        animal.input.enableDrag();
	        animal.events.onDragStart.add(this.animalMoveStart, this, null, i, animalChoice);
	        animal.events.onDragStop.add(this.animalMoveEnd, this, null, i, animalChoice);
			
			animalChoices.push(animalChoice);
		}
	},
	goMainMenu: function() {
		selfGame.game.state.start('MainMenu');
	},
	restartLevel: function () {
		selfGame.game.state.start(selfGame.game.state.current);
	},
	update: function() {

	}
};