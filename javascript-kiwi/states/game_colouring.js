 var CatsKids = CatsKids || {};

CatsKids.GameColouring = new Kiwi.State( "GameColouring" );

CatsKids.GameColouring.create = function () {

	Kiwi.State.prototype.create.call( this );

	self = this;
	if (Kiwi.DEVICE.touch) {
		console.log('Touch device');
		self.pointer = this.game.input.touch.fingers[0];
	} else {
		console.log('Not a touch device');
		self.pointer = this.game.input.mouse;
	}

	self.cl = new Kiwi.Sound.Audio(self.game, 'audioCl', 1, false);
	self.ick = new Kiwi.Sound.Audio(self.game, 'audioIck', 1, false);

    self.gridX = 1920 / 24;
    self.gridY = 1080 / 16;

	self.background = new Kiwi.GameObjects.StaticImage( self, self.textures.background, 0, 0 );
	self.addChild( self.background );

	self.back = new Kiwi.GameObjects.Sprite(self, self.textures.uiAtlas, (self.gridX * 2) - 105, (self.gridY * 2) - 105);
	self.back.animation.switchTo( 17 );
	self.back.input.onDown.add( self.buttonDown, self );
	self.back.input.onUp.add( self.buttonClickedBack, self );
	self.addChild( self.back );

	self.isDownText = new Kiwi.GameObjects.Textfield( self, 'isDown: ', 100, 100, '#FFFFFF', 52  );
	self.addChild( self.isDownText );

	for(var i = 0; i < self.textures.uiAtlas.cells.length; i++) {
		console.log(i + ' - ' + self.textures.uiAtlas.cells[i].name);
		// console.log(self.textures.shapesAtlas.cells[i]);
	}

	// Draw rectangle
	params = {
		state: self,
		width: (self.gridX * 2),
		height: 1080,
		x: (self.gridX * 22),
		y: 0,
		color: [ 0.5, 0.5, 0.5 ]
	};
	params.drawStroke = false;
	self.rectangleNoStroke = new Kiwi.Plugins.Primitives.Rectangle( params );
	self.addChild( self.rectangleNoStroke );


	self.drawGroup = new Kiwi.Group( self );
	self.addChild( self.drawGroup );

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

	self.brushColourBtns = [];
	self.brushColours = [];

	var brushColourBlackBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 1 ) );
	self.brushColourBlack =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 1 ) );
	brushColourBlackBtn.animation.switchTo(8);
	self.brushColourBlack.animation.switchTo(8);
	brushColourBlackBtn.input.onUp.add( function() { self.paintUp(0, this); }, self );
	self.brushColourBtns.push(brushColourBlackBtn);
	self.brushColours.push(self.brushColourBlack);
// *************************************************************************************************************
	var brushColourBlueBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 2 ) );
	self.brushColourBlue =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 2 ) );
	brushColourBlueBtn.animation.switchTo(10);
	self.brushColourBlue.animation.switchTo(10);
	brushColourBlueBtn.input.onUp.add( function() { self.paintUp(1, this); }, self );
	self.brushColourBtns.push(brushColourBlueBtn);
	self.brushColours.push(self.brushColourBlue);
// *************************************************************************************************************
	var brushColourBrownBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 3 ) );
	self.brushColourBrown =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 3 ) );
	brushColourBrownBtn.animation.switchTo(11);
	self.brushColourBrown.animation.switchTo(11);
	brushColourBrownBtn.input.onUp.add( function() { self.paintUp(2, this); }, self );
	self.brushColourBtns.push(brushColourBrownBtn);
	self.brushColours.push(self.brushColourBrown);
// *************************************************************************************************************
	var brushColourOrangeBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 4 ) );
	self.brushColourOrange =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 4 ) );
	brushColourOrangeBtn.animation.switchTo(7);
	self.brushColourOrange.animation.switchTo(7);
	brushColourOrangeBtn.input.onUp.add( function() { self.paintUp(3, this); }, self );
	self.brushColourBtns.push(brushColourOrangeBtn);
	self.brushColours.push(self.brushColourOrange);
// *************************************************************************************************************
	var brushColourYellowBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 5 ) );
	self.brushColourYellow =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 5 ) );
	brushColourYellowBtn.animation.switchTo(2);
	self.brushColourYellow.animation.switchTo(2);
	brushColourYellowBtn.input.onUp.add( function() { self.paintUp(4, this); }, self );
	self.brushColourBtns.push(brushColourYellowBtn);
	self.brushColours.push(self.brushColourYellow);
// *************************************************************************************************************
	var brushColourRedBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 6 ) );
	self.brushColourRed =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 6 ) );
	brushColourRedBtn.animation.switchTo(4);
	self.brushColourRed.animation.switchTo(4);
	brushColourRedBtn.input.onUp.add( function() { self.paintUp(5, this); }, self );
	self.brushColourBtns.push(brushColourRedBtn);
	self.brushColours.push(self.brushColourRed);
// *************************************************************************************************************
	var brushColourPurpleBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 7 ) );
	self.brushColourPurple =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 7 ) );
	brushColourPurpleBtn.animation.switchTo(3);
	self.brushColourPurple.animation.switchTo(3);
	brushColourPurpleBtn.input.onUp.add( function() { self.paintUp(6, this); }, self );
	self.brushColourBtns.push(brushColourPurpleBtn);
	self.brushColours.push(self.brushColourPurple);
// *************************************************************************************************************
	var brushColourPinkBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 8 ) );
	self.brushColourPink =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 8 ) );
	brushColourPinkBtn.animation.switchTo(5);
	self.brushColourPink.animation.switchTo(5);
	brushColourPinkBtn.input.onUp.add( function() { self.paintUp(7, this); }, self );
	self.brushColourBtns.push(brushColourPinkBtn);
	self.brushColours.push(self.brushColourPink);
// *************************************************************************************************************
	var brushColourGreenBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 9 ) );
	self.brushColourGreen =  new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 9 ) );
	brushColourGreenBtn.animation.switchTo(6);
	self.brushColourGreen.animation.switchTo(6);
	brushColourGreenBtn.input.onUp.add( function() { self.paintUp(8, this); }, self );
	self.brushColourBtns.push(brushColourGreenBtn);
	self.brushColours.push(self.brushColourGreen);
// *************************************************************************************************************
	var brushColourCyanBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 10 ) );
	self.brushColourCyan = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 10 ) );
	brushColourCyanBtn.animation.switchTo(9);
	self.brushColourCyan.animation.switchTo(9);
	brushColourCyanBtn.input.onUp.add( function() { self.paintUp(9, this); }, self );
	self.brushColourBtns.push(brushColourCyanBtn);
	self.brushColours.push(self.brushColourCyan);
// *************************************************************************************************************
	var brushColourNavyBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 11 ) );
	self.brushColourNavy = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 11 ) );
	brushColourNavyBtn.animation.switchTo(0);
	self.brushColourNavy.animation.switchTo(0);
	brushColourNavyBtn.input.onUp.add( function() { self.paintUp(10, this); }, self );
	self.brushColourBtns.push(brushColourNavyBtn);
	self.brushColours.push(self.brushColourNavy);
// *************************************************************************************************************
	var brushColourWhiteBtn = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 12 ) );
	self.brushColourWhite = new Kiwi.GameObjects.Sprite( self, self.textures.uiAtlas, self.gridX * 23, (1080 / 13 * 12 ) );
	brushColourWhiteBtn.animation.switchTo(1);
	self.brushColourWhite.animation.switchTo(1);
	brushColourWhiteBtn.input.onUp.add( function() { self.paintUp(11, this); }, self );
	self.brushColourBtns.push(brushColourWhiteBtn);
	self.brushColours.push(self.brushColourWhite);
// *************************************************************************************************************
	for(var i = 0; i < self.brushColourBtns.length; i++) {
		if(i == (self.brushColourBtns.length - 1) ) {
			self.brushColourBtns[i].scale = 0.6;
		} else {
			self.brushColourBtns[i].scale = 0.4;
		}
		self.brushColours[i].scale = 0.6;
		self.brushColours[i].x = this.positionSpriteX(self.brushColours[i].x, self.brushColours[i].width);
		self.brushColours[i].y = this.positionSpriteY(self.brushColours[i].y, self.brushColours[i].height);
		self.addChild(self.brushColourBtns[i]);
		console.log(self.brushColours[i]);
	}

	self.paintBrush = self.brushColours[self.brushColours.length - 1];
	self.addChild(self.paintBrush);
};

CatsKids.GameColouring.buttonClickedBack = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex - 1);
	self.ick.play();
	self.game.states.switchState('Intro');
};

CatsKids.GameColouring.buttonDown = function (obj, pointer) {
	obj.animation.switchTo(obj.cellIndex + 1);
	self.cl.play();
};

CatsKids.GameColouring.paintUp = function (num, obj) {
	console.log(num);
	console.log(obj);
	for(var i = 0; i < brushColours.length; i++) {
		brushColours[i].scale  = 0.4;
	}
	obj.scale  = 0.6;
	self.paintBrush = JSON.parse(JSON.stringify( self.brushColours[num] ));
};

CatsKids.GameColouring.positionSpriteX = function (positionX, width) {
	return (positionX - ( width / 2 ));
};

CatsKids.GameColouring.positionSpriteY = function (positionY, height) {
	return (positionY - ( height / 2 ));
};

CatsKids.GameColouring.update = function () {
	Kiwi.State.prototype.update.call( this );

	if (!Kiwi.DEVICE.touch) {
		self.paintBrush.x = this.pointer.x - (self.paintBrush.width / 2);
		self.paintBrush.y = this.pointer.y - (self.paintBrush.height / 2);
	}
	// this.xText.text = "x: " + Math.round ( this.game.input.x * 10 ) / 10;
	// this.yText.text = "y: " + Math.round ( this.game.input.y * 10 ) / 10;

	self.isDownText.text = "isDown: " + self.pointer.isDown;
	if(self.pointer.isDown) {
		self.drawGroup.addChild( self.paintBrush );
	}
};