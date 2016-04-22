Crafty.defineScene('gameMatch', function() {
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

	var rect = Crafty.e('2D, Canvas, Color')
		.attr({x: gridX * 20, y: 0, w: gridX * 4, h: 1080})
		.color('rgba(0, 0, 0, 0.6)');

	var animals = [
		['horse', false],
		['cow', false],
		['sheep', false],
		['pig', false],
		['dog', false],
		['chicken', false],
		['duck', false],
	];

	var animalChoices = [];
	var animalHoleChoices = [];
	var roundScore = 0;

	for(var i = 0; i < 4; i++) {
		do {
			animalChoice = Crafty.math.randomInt(0, animals.length - 1);
		} while (animals[animalChoice][1] === true);
		
		var j = Math.floor(i / 2) + 1;
		if(i % 2 === 0) {
			var k = 2;
		} else {
			var k = 1;
		}

		var animalHole = Crafty.e('2D, Canvas, Image')
			.image('assets/images/' + animals[animalChoice][0] + '_hole-crafty.png')
			.attr({x:0, y:0});
		animalHole.attr({x:positionCorrectionX(gridX * k * 7, animalHole.w), y: positionCorrectionY(gridY * j * 6, animalHole.h)})
		animalHoleChoices.push(animalHole);

		var animal = Crafty.e('2D, Canvas, Image, Draggable')
			.attr({x:gridX * 22, y: ( (1080 / 5) * (i + 1) )})
			.image('assets/images/' + animals[animalChoice][0] + '_hole_match-crafty.png')
			.bind('StartDrag', function(e) {
				var arrayPos = $.inArray(this, animalChoices);
				animalInformation = [arrayPos, this.x, this.y];
			})
			.bind('StopDrag', function(e) {
				// console.log('Stopped dragging');
				// console.log(this);
				// console.log(animalChoices);
				var arrayPos = -1;
				var animalPos = null;
				do {
					arrayPos++;
					animalPos = animalChoices[arrayPos][1];
				} while (animalChoices[arrayPos][0] != this);
				// console.log(arrayPos);
				// console.log(animalHoleChoices);
				// console.log(animalHoleChoices[arrayPos]);
				// console.log(animalHoleChoices[arrayPos].x);
				if(this.intersect(animalHoleChoices[arrayPos].x, animalHoleChoices[arrayPos].y, animalHoleChoices[arrayPos].w, animalHoleChoices[arrayPos].h)) {
					this.destroy();
					// console.log(this.image);
					// console.log(animals[selectedAnimalNumber]);
					// console.log(animals[selectedAnimalNumber][0]);
					animalHoleChoices[arrayPos].image('assets/images/' + animals[animalPos][0] + '_hole_match-crafty.png');
					roundScore++;
					if(roundScore == 4) {
						setTimeout(function() {
							Crafty.enterScene('gameMatch');
						}, 1500);
					}
				} else {
					this.x = animalInformation[1];
					this.y = animalInformation[2];
				}
			});
		// console.log(animals[animalChoice][0]);
		animals[animalChoice][1] = true;
		animalChoices.push([animal, animalChoice]);
	}
});