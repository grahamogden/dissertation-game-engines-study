Crafty.defineScene('gameColouring', function() {
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

	Crafty.c("Brush", {
		init: function () {
			this.requires("2D, Canvas");
			this.radius = 150;
			this.w = this.h = this.radius * 2;
			this.color = this.color || '#FFFFFF';
			this.bind("Draw", this._draw_me);
			this.ready = true;
		},
		_draw_me: function (e) {
			var ctx = e.ctx;
			// var ctx = Crafty.canvas.context;
			ctx.save();
			ctx.fillStyle = this.color;
			ctx.beginPath();
			// ctx.moveTo(e.pos._x, e.pos._y);
			// ctx.lineTo(e.pos._x + 500, e.pos._y + 700);
			// ctx.stroke();
			ctx.arc(
				this.x + this.radius,
				this.y + this.radius,
				this.radius,
				0,
				Math.PI * 2
			);
			ctx.closePath();
			ctx.fill();
		}
	});

	var brush = Crafty.e("Brush")
		.attr({x: 10, y: 20, w: 500, h: 700});

/*	Crafty.c("Circle", {
		Circle: function(radius, color) {
			this.radius = radius;
			this.w = this.h = radius * 2;
			this.color = color || "#000000";

			return this;
		},

		draw: function() {
			var ctx = Crafty.canvas.context;
			ctx.save();
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(
				this.x + this.radius,
				this.y + this.radius,
				this.radius,
				0,
				Math.PI * 2
			);
			ctx.closePath();
			ctx.fill();
		}
	});


	Crafty.e("2D, Canvas, Circle")
		.Circle(40, "#FFFFFF");*/

	var rect = Crafty.e('2D, Canvas, Color')
		.attr({x: gridX * 22, y: 0, w: gridX * 2, h: 1080})
		.color('rgba(0, 0, 0, 0.6)');

	// brush = selfGame.game.make.sprite(0, 0, 'uiButtons');
	// brush.anchor.set(0.5);
	// brush.scale.set(0.5);
	// brush.frameName = 'brush_white.png';

	// for(var i = 0; i < colours.length; i++) {
	// 	var brushColour = selfGame.add.button(tileGridX * 23, (selfGame.game.height / 13 * (i + 1) ), 'uiButtons', selfGame.colourPick, this, 'brush_' + colours[i] + '.png', 'brush_' + colours[i] + '.png');
	// 	brushColour.anchor.set(0.5);

	// 	if(i != (colours.length - 1) ) {
	// 		brushColour.scale.set(0.4);
	// 	} else {
	// 		brushColour.scale.set(0.6);
	// 	}

	// 	brushColours.push(brushColour);
	// }
});