Crafty.defineScene('gameShapes', function() {
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

	var shapes = ['circle', 'triangle', 'square'];
	var shapesTwo = [];

	var holeShapeNumber = Crafty.math.randomInt(0, 2);
	var holeShape = Crafty.e('2D, Canvas')
		.attr({x: positionCorrectionX(gridX * 12, 350), y: positionCorrectionY(gridY * 12, 350), w: 350, h: 350});
	holeShape.addComponent(shapes[holeShapeNumber] + '_hole');
	console.log(holeShape);

	for(var i = 0; i < 3; i++) {
		var shape = Crafty.e('2D, Canvas, Draggable')
			.attr({x: positionCorrectionX(gridX * (6 * (i + 1)), 350), y: positionCorrectionY(gridY * 4, 350), w: 350, h: 350})
			.bind('StopDrag', function(e) {
				console.log('Stopped dragging');// startDrag();
				var arrayPos = $.inArray(this, shapesTwo);
				if(arrayPos == holeShapeNumber && this.intersect(positionCorrectionX(gridX * 12, 350), positionCorrectionY(gridY * 12, 350), 350, 350)) {
					holeShape.toggleComponent(shapes[arrayPos] + '_hole', shapes[arrayPos]);
					console.log('It works!!!');
					this.destroy();
					setTimeout(function() {
						Crafty.enterScene('gameShapes');
					}, 1500);
				}
			});
		shape.addComponent(shapes[i]);
		console.log(shapes[i]);
		console.log(shape);
		// shape.startDrag();
		shapesTwo.push(shape);
	}

});