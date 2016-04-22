Crafty.defineScene('gameNumbers', function() {
	var backBtn = Crafty.e('Button, 2D, Canvas, Image, Mouse')
		.attr({x: positionCorrectionX(gridX * 2, 210), y: positionCorrectionY(gridY * 2, 210), w: 210, h: 210})
		.image('assets/images/back.png')
		.bind('Click', function(e){
			// console.log('clicked');
			this.image('assets/images/back.png');
			Crafty.audio.play('audioIck', 1);
			Crafty.enterScene('mainMenu');
		})
		.bind('MouseDown', function(e) {
			// console.log('Down');
			this.image('assets/images/back_down.png');
			Crafty.audio.play('audioCl', 1);
		});


	numberButtons = [];
	
	for(var i = 1; i <= 3; i++) {
		switch(i) {
			case 1 :
				var number = 'One';
				break;
			case 2 :
				var number = 'Two';
				break;
			case 3 :
				var number = 'Three';
				break;
		}
		var numberButton = Crafty.e('2D, Canvas, Tween, Mouse, number' + number)
			.attr({x: positionCorrectionX(gridX * 6 * i, 350), y: positionCorrectionY(gridY * 5, 350), w: 350, h: 350})

			.bind('Click', function(e) {
				var chosenNumber = $.inArray(this, numberButtons) + 1;
				console.log(chosenNumber);
				if(chosenNumber == randomNumber) {
				//     var tween = selfGame.game.add.tween(numberButtons[randomNumber-1].scale);
				//     tween.to({x: 1.5, y:1.5}, 600, Phaser.Easing.Linear.None);
				//     tween.start();
					this.tween({w: 420, h: 420}, 600)
					setTimeout(function() {
						Crafty.enterScene('gameNumbers');
					}, 1000);
				}
			});
		numberButtons.push(numberButton);
	}
	//To prevent the same number from appearing twice in a row
	if(typeof randomNumber !== "undefined") {
		var tempRandomNumber;
		do {
			tempRandomNumber = Crafty.math.randomInt(1, 3);
		} while (tempRandomNumber == randomNumber);
		randomNumber = tempRandomNumber;
	} else {
    	randomNumber = Crafty.math.randomInt(1, 3);
    }
	for(var i = 0; i < randomNumber; i++) {
		var animal = Crafty.e('2D, Canvas, duck')
			.crop(0, 510, 480, 500)
			.attr({x: positionCorrectionX(gridX * 6 * (i + 1), 200), y: positionCorrectionY(gridY * 13, 200), w: 240, h: 250});
	}
});