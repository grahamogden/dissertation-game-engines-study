Crafty.paths({ audio: "assets/audio/", images: "assets/images/" });

var assetsObj = {
	'images' : [
		'logo.png',
		'preload-bar.png'
	]
};


Crafty.load(assetsObj,
	function() {
		Crafty.enterScene('preload');
	},
	function(progress) {
		// console.log('Boot complete');
	}
);