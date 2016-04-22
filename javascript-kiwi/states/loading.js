/**
* Loading State loads in all of the in-game assets.
*
* Because in this blueprint there is only a single "hidden object" section
* we are going to load in all of the assets at this point.
*
* If you have multiple states, I would recommend loading the other graphics
* as they are required by their states.
* Otherwise the loading times may be a bit long and it is not optimal.
*/

/**
* Since we want to use the custom Kiwi.JS loader with the bobbing kiwi/html5
* logo, we need to extend the KiwiLoadingScreen State.
* The KiwiLoadingScreen State is an extension of a normal State,
* with some custom code to handle the loading/bobbing/fading of all the items,
* so if you override a method (e.g. the preload) make sure you call the
* super method.
* 
* The parameters we are passing into this method are as follows:
* 1 - name {string} Name of this state.
* 2 - stateToSwitch {string} Name of the state to switch to AFTER all the
*	assets have loaded. Note: The state you want to switch to should already
*	have been added to the game.
* 3 - dimensions {object} A Object containing the width/height that the game
*	is to be. For example `{width: 1024, height: 768}`
* 4 - subfolder {string} Folder that the loading graphics are located in
*/

var CatsKids = CatsKids || {};

CatsKids.Loading = new Kiwi.State('Loading');

CatsKids.Loading.preload = function () {
	Kiwi.State.prototype.preload.call(this);

	// Images
	this.addTextureAtlas( 'uiAtlas', 'assets/images/ui_spritesheet_2.png', 'uiAtlasJSON', 'assets/images/ui_spritesheet_2-kiwi.json' );
	this.addTextureAtlas( 'animalsAtlas', 'assets/images/animals_spritesheet_2.png', 'animalsAtlasJSON', 'assets/images/animals_spritesheet_2-kiwi.json' );
	this.addTextureAtlas('shapesAtlas', 'assets/images/shapes_spritesheet.png', 'shapesAtlasJSON', 'assets/images/shapes_spritesheet-kiwi.json');
	this.addImage( 'background', 'assets/images/background.png' );
	this.addImage( 'backgroundAnimals', 'assets/images/animals_background.png' );

	// Audio
	this.addAudio('audioCl', '/assets/audio/cl.mp3');
	this.addAudio('audioIck', 'assets/audio/ick.mp3');
	this.addAudio('audioAnimals', 'assets/audio/animals.mp3');
	// this.load.audio('audioCl', 'assets/audio/cl.mp3');
	// this.load.audio('audioIck', 'assets/audio/ick.mp3');
};

CatsKids.Loading.create = function () {
	Kiwi.State.prototype.create.call(this);
	this.game.states.switchState('Intro');
};

// CatsKids.Loading = new KiwiLoadingScreen('Loading','Intro', 'assets/images/loading/');

// CatsKids.Loading.preload = function () {
//     KiwiLoadingScreen.prototype.preload.call(this);

// 	// Images
// 	this.addTextureAtlas( 'uiAtlas', 'assets/images/ui_spritesheet_2.png', 'uiAtlasJSON', 'assets/images/ui_spritesheet_2-kiwi.json' );
// 	this.addTextureAtlas( 'animalsAtlas', 'assets/images/animals_spritesheet_2.png', 'animalsAtlasJSON', 'assets/images/animals_spritesheet_2-kiwi.json' );
// 	this.addImage( 'background', 'assets/images/background.png' );
// 	this.addImage( 'backgroundAnimals', 'assets/images/animals_background.png' );

// 	// Audio
// 	this.addAudio('audioCl', '/assets/audio/cl.mp3');
// 	this.addAudio('audioIck', 'assets/audio/ick.mp3');
// 	this.addAudio('audioAnimals', 'assets/audio/animals.mp3');

//     game.stage.resize(1920, 1080);
// };
