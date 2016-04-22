Crafty.defineScene('mainMenu', function() {
	Crafty.background('#FFFFFF url(assets/images/background.png) no-repeat');

	var tileGameAnimals = Crafty.e('Button, 2D, Canvas, Mouse, tileAnimals')
	    .attr({x: positionCorrectionX(gridX * 6, 350), y: positionCorrectionY(gridY * 6, 350)})
	    .bind('MouseDown', function(e) {
	        // console.log('Down');
	        this.toggleComponent('tileAnimals','tileAnimalsDown');
	        Crafty.audio.play('audioCl', 1);
	    })
	    .bind('Click', function(e) {
	        // console.log('Up');
	        this.toggleComponent('tileAnimals','tileAnimalsDown');
	        Crafty.audio.play('audioIck', 1);
	        Crafty.enterScene('gameAnimals');
	    });

	var tileGameColouring = Crafty.e('Button, 2D, Canvas, Image, Mouse, tileColouring')
	    .attr({x: positionCorrectionX(gridX * 12, 350), y: positionCorrectionY(gridY * 6, 350)})
	    .bind('MouseDown', function(e) {
	        // console.log('Down');
	        Crafty.audio.play('audioCl', 1);
	        this.toggleComponent('tileColouring', 'tileColouringDown');
	    })
	    .bind('Click', function(e) {
	        // console.log('Up');
	        Crafty.audio.play('audioIck', 1);
	        this.toggleComponent('tileColouring', 'tileColouringDown');
	        Crafty.enterScene('gameColouring');
	    });

	var tileGameMatch = Crafty.e('Button, 2D, Canvas, Image, Mouse, tileMatch')
	    .attr({x: positionCorrectionX(gridX * 18, 350), y: positionCorrectionY(gridY * 6, 350)})
	    .bind('MouseDown', function(e) {
	        // console.log('Down');
	        this.toggleComponent('tileMatch', 'tileMatchDown');
	        Crafty.audio.play('audioCl', 1);
	    })
	    .bind('Click', function(e) {
	        // console.log('Up');
	        this.toggleComponent('tileMatch', 'tileMatchDown');
	        Crafty.audio.play('audioIck', 1);
	        Crafty.enterScene('gameMatch');
	    });

	var tileGameShapes = Crafty.e('Button, 2D, Canvas, Image, Mouse, tileShapes')
	    .attr({x: positionCorrectionX(gridX * 6, 350), y: positionCorrectionY(gridY * 12, 350)})
	    .bind('MouseDown', function(e) {
	        // console.log('Down');
	        this.toggleComponent('tileShapes', 'tileShapesDown');
	        Crafty.audio.play('audioCl', 1);
	    })
	    .bind('Click', function(e) {
	        // console.log('Up');
	        this.toggleComponent('tileShapes', 'tileShapesDown');
	        Crafty.audio.play('audioIck', 1);
	        Crafty.enterScene('gameShapes');
	    });

	var tileGameNumbers = Crafty.e('Button, 2D, Canvas, Image, Mouse, tileNumbers')
	    .attr({x: positionCorrectionX(gridX * 12, 350), y: positionCorrectionY(gridY * 12, 350)})
	    .bind('MouseDown', function(e) {
	        // console.log('Down');
	        this.toggleComponent('tileNumbers', 'tileNumbersDown');
	        Crafty.audio.play('audioCl', 1);
	    })
	    .bind('Click', function(e) {
	        // console.log('Up');
	        this.toggleComponent('tileNumbers', 'tileNumbersDown');
	        Crafty.audio.play('audioIck', 1);
	        Crafty.enterScene('gameNumbers');
	    });	      
});