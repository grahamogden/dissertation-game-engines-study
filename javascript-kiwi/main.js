// if(typeof(Storage) !== 'undefined') {
//	 if(localStorage.getItem('name') !== 'undefined' && localStorage.getItem('name') !== null && localStorage.getItem('age') !== NaN && localStorage.getItem('age') !== null && localStorage.getItem('age') !== undefined) {

        var gameOptions = {
            deviceTarget : Kiwi.TARGET_BROWSER,
            renderer: Kiwi.RENDERER_WEBGL, 
            scaleType : Kiwi.Stage.SCALE_FIT,
            plugins: ['Primitives'],
            width: 1920,
            height: 1080
        }
         
        var game = new Kiwi.Game('game_canvas', 'CatsKids', null, gameOptions);
		game.stage.color = "FFFFFF";

        game.states.addState( CatsKids.Loading );
        game.states.addState( CatsKids.Intro );
        // game.states.addState( CatsKids.Settings );
        game.states.addState( CatsKids.GameAnimals );
        game.states.addState( CatsKids.GameColouring );
        game.states.addState( CatsKids.GameShapes );
        game.states.addState( CatsKids.GameNumbers );
        game.states.addState( CatsKids.GameMatch );
        game.states.switchState( 'Loading' );

	//	 mainMenu.preload = function () {
	//		 Kiwi.State.prototype.preload.call(this);
	//		 // this.addSpriteSheet( 'tileS', 'assets/examples/character.png', 150, 117 );
	//		 this.addTextureAtlas( 'uiAtlas', 'assets/images/ui_spritesheet_2.png', 'uiAtlasJSON', 'assets/images/ui_spritesheet_2-kiwi.json' );
	//		 this.addImage( 'background', 'assets/images/background.png' );
	//	 }

	//	 mainMenu.create = function(){
	//		 Kiwi.State.prototype.create.call( this );
		 
	//		 this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );

	//		 this.tileAnimals = new Kiwi.GameObjects.Sprite( this, this.textures.uiAtlas, 0, 0);
	//		 this.tileAnimals.animation.switchTo( 32 );
	//		 this.addChild( this.tileAnimals );

	//		 // this.tileAnimals = new Kiwi.GameObjects.Sprite( this, this.textures.tileAnimalsSprite, 350, 330 );
	//		 // this.leftKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.A );
	//		 // this.rightKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.D );
	//		 // this.downKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.S );

	//		 // this.tileAnimals.animation.add( 'idleright', [ 0 ], 0.1, false );
	//		 // this.tileAnimals.animation.add( 'crouchright', [ 1 ], 0.1, false );
	//		 // this.tileAnimals.animation.add( 'moveright', [ 2, 3, 4, 5, 6, 7 ], 0.1, true );
	//		 // this.tileAnimals.animation.add( 'idleleft', [ 8 ], 0.1, false );
	//		 // this.tileAnimals.animation.add( 'crouchleft', [ 9 ], 0.1, false );
	//		 // this.tileAnimals.animation.add( 'moveleft', [ 15, 14, 13, 12, 11, 10 ], 0.1, true );
	 
	//		 // this.facing = 'right';
	 
	//		 // this.tileAnimals.animation.play( 'idleright' );
	//		 this.addChild( this.background );
	//		 this.addChild( this.tileAnimals );
	//	 }

	//	 mainMenu.update = function() {
	//		 Kiwi.State.prototype.update.call(this);
	//		 // if ( this.downKey.isDown ) {
	//		 //	 if ( this.character.animation.currentAnimation.name != ( 'crouch' + this.facing ))
	//		 //		 this.character.animation.play( 'crouch' + this.facing );
	//		 // }
	//		 // else if ( this.leftKey.isDown ) {
	//		 //	 this.facing = 'left';
	//		 //	 if ( this.character.transform.x > 3 )
	//		 //		 this.character.transform.x-=3;
	//		 //	 if ( this.character.animation.currentAnimation.name != 'moveleft' )
	//		 //		 this.character.animation.play( 'moveleft' );
	//		 // }
	//		 // else if ( this.rightKey.isDown ) {
	//		 //	 this.facing = 'right';
	//		 //	 if ( this.character.transform.x < 600 )
	//		 //		 this.character.transform.x+=3;
	//		 //	 if ( this.character.animation.currentAnimation.name != 'moveright' )
	//		 //		 this.character.animation.play( 'moveright' );
	//		 // }
	//		 // else {
	//		 //	 if ( this.character.animation.currentAnimation.name != 'idle' + this.facing ){
	//		 //		 this.character.animation.play( 'idle' + this.facing );
	//		 //	  }
	//		 // }
	//	 }

	// game.states.addState( mainMenu );
	// game.states.switchState( 'mainMenu' );


		// var CatsKids = CatsKids || {};

			// var gameWidth  = 1920,
			//	 gameHeight = 1080;
			// game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game_canvas');

// } else {
//	 alert('Sorry! We cannot save your data to your device!');
// }

// function saveToStorage() {
//	 var name = document.forms['signupForm']['name'].value;
//	 var age = parseInt(document.forms['signupForm']['age'].value);
//	 console.log(name);
//	 console.log(jQuery.type(age));
//	 console.log(age);

//	 if(name !== '' && !isNaN(age)) {
//		 localStorage.setItem('name', name);
//		 localStorage.setItem('age', age);
//		 return true;
//	 } else {
//		 alert('Please enter a valid name and age!');
//		 return false;
//	 }
// }