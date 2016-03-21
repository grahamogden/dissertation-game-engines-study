//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.GameNumbers = function(game) {};

CatsKids.GameNumbers.prototype = {
	create: function() {
		selfGame = this;
		selfGame.background = selfGame.add.sprite(0,0, 'background');
		selfGame.background.width = selfGame.game.width;
		selfGame.background.height = selfGame.game.height;

        var tileGridX = (selfGame.game.width) / 24;
        var tileGridY = (selfGame.game.height) / 16;

		selfGame.back = selfGame.add.button(tileGridX * 2, tileGridY * 2, 'uiButtons', selfGame.goMainMenu, selfGame, 'back_down.png', 'back.png');
		selfGame.back.anchor.set(0.5);
		selfGame.back.onDownSound = audioCl;
		selfGame.back.onUpSound = audioIck;

		numberButtons = [];
		
		for(var i = 1; i <=3; i++) {
			switch(i) {
				case 1 :
					var number = 'one';
					break;
				case 2 :
					var number = 'two';
					break;
				case 3 :
					var number = 'three';
					break;
			}
			selfGame.numberButton = selfGame.add.button(tileGridX * 6 * i, tileGridY * 5, 'uiButtons', selfGame.numberClick, selfGame, number + '.png', number + '.png');
			selfGame.numberButton.anchor.set(0.5);
			numberButtons.push(selfGame.numberButton);
		}
		if(typeof randomNumber !== "undefined") {
			var tempRandomNumber;
			do {
				tempRandomNumber = selfGame.game.rnd.integerInRange(1, 3);
			} while (tempRandomNumber == randomNumber);
			randomNumber = tempRandomNumber;
		} else {
        	randomNumber = selfGame.game.rnd.integerInRange(1, 3);
        }
		for(var i = 0; i < randomNumber; i++) {
			
			var animal = selfGame.add.sprite((tileGridX * 6 * (i + 1)), tileGridY * 13, 'animals');
			animal.frameName = 'duck.png';
			animal.anchor.set(0.5);
			animal.scale.set(0.4);
		}
		
		
		
        /*var graphics = this.game.add.graphics(0, 0);
	    graphics.beginFill(0xFFFFFF);
	    graphics.lineStyle(2, 0xFFFFFF, 1);
		for(var j = 0; j < 25; j++){
        	graphics.drawRect(((tileGridX * j)), 0, 1, 1920);
        }
        for(var j = 0; j < 20; j++){
        	graphics.drawRect(0, ((tileGridY * j)), 1920, 1);
        }
    	window.graphics = graphics;*/
	},
	goMainMenu: function() {
		selfGame.game.state.start('MainMenu');
	},
	numberClick: function(button) {
		var chosenNumber;
		switch(button.frameName) {
			case 'one.png' :
				chosenNumber = 1;
				break;
			case 'two.png' :
				chosenNumber = 2;
				break;
			case 'three.png' :
				chosenNumber = 3;
				break;
		}
		if(chosenNumber == randomNumber) {
		    var s = selfGame.game.add.tween(numberButtons[randomNumber-1].scale);
		    s.to({x: 1.5, y:1.5}, 600, Phaser.Easing.Linear.None);
		    s.start();

			setTimeout(function() {
				selfGame.restartLevel();
			}, 1000);
		}
	},
	restartLevel: function () {
		selfGame.game.state.start(selfGame.game.state.current);
	},
	update: function() {

	}
};