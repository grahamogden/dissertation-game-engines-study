Crafty.defineScene('gameAnimals', function() {
	Crafty.background('#FFFFFF url(assets/images/animals_background.png) no-repeat');

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


	var horse = Crafty.e('animalBtn, 2D, Canvas, Mouse, horse')
		.crop(1080, 2050, 1070, 920)
	    .attr({x: positionCorrectionX(1220, 374.5), y: positionCorrectionY(450, 322), w: 374.5, h: 322})
	    // .image('assets/images/horse.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioHorse', 1);
	    });

	var cow = Crafty.e('animalBtn, 2D, Canvas, Mouse, cow')
		.crop(0, 3010, 1300, 950)
	    .attr({x: positionCorrectionX(270, 455), y: positionCorrectionY(450, 332.5), w: 455, h: 332.5})
	    // .image('assets/images/cow.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioCow', 1);
	    });

	var sheep = Crafty.e('animalBtn, 2D, Canvas, Mouse, sheep')
		.crop(2360, 0, 630, 500)
	    .attr({x: positionCorrectionX(710, 283.5), y: positionCorrectionY(510, 225), w: 283.5, h: 225})
	    // .image('assets/images/sheep.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioSheep', 1);
	    });

	var pig = Crafty.e('animalBtn, 2D, Canvas, Mouse, pig')
		.crop(2800, 510, 900, 600)
	    .attr({x: positionCorrectionX(1620, 495), y: positionCorrectionY(630, 330), w: 495, h: 330})
	    // .image('assets/images/pig.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioPig', 1);
	    });

	var duck = Crafty.e('animalBtn, 2D, Canvas, Mouse, duck')
		.crop(0, 510, 480, 500)
	    .attr({x: positionCorrectionX(980, 240), y: positionCorrectionY(730, 250), w: 240, h: 250})
	    // .image('assets/images/duck.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioDuck', 1);
	    });

	var chicken = Crafty.e('animalBtn, 2D, Canvas, Mouse, chicken')
		.crop(820, 0, 400, 400)
	    .attr({x: positionCorrectionX(1240, 200), y: positionCorrectionY(820, 200), w: 200, h: 200})
	    // .image('assets/images/chicken.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioChicken', 1);
	    });

	var dog = Crafty.e('animalBtn, 2D, Canvas, Mouse, dog')
		.crop(1320, 1120, 650, 650)
	    .attr({x: positionCorrectionX(300, 422.5), y: positionCorrectionY(830, 422.5), w: 422.5, h: 422.5})
	    // .image('assets/images/dog.png')
	    .bind('Click', function(e){
	        Crafty.audio.play('audioDog', 1);
	    });
});