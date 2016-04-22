Crafty.defineScene('preload', function() {
	Crafty.paths({ audio: "assets/audio/", images: "assets/images/" });

	var assetsObj = {
		'audio': {
			'audioCl':      'cl.mp3',
			'audioIck':     'ick.mp3',
		    'audioHorse':   'horse.mp3',
		    'audioDog':     'dog.mp3',
		    'audioSheep':   'sheep.mp3',
		    'audioPig':     'pig.mp3',
		    'audioChicken': 'chicken.mp3',
		    'audioCow':     'cow.mp3',
		    'audioDuck':    'duck.mp3'
		},
		'images' : [
			'background.png',
			'animals_background.png',
			// 'back.png',
			// 'back_down.png',
			// 'settings.png',
			// 'settings_down.png',
			// 'tile_animals.png',
			// 'tile_animals_down.png',
			// 'tile_colouring.png',
			// 'tile_colouring_down.png',
			// 'tile_match.png',
			// 'tile_match_down.png',
			// 'tile_numbers.png',
			// 'tile_numbers_down.png',
			// 'tile_shapes.png',
			// 'tile_shapes_down.png',
			'horse_hole_match-crafty.png',
			'horse_hole-crafty.png',
			'cow_hole_match-crafty.png',
			'cow_hole-crafty.png',
			'sheep_hole_match-crafty.png',
			'sheep_hole-crafty.png',
			'pig_hole_match-crafty.png',
			'pig_hole-crafty.png',
			'duck_hole_match-crafty.png',
			'duck_hole-crafty.png',
			'chicken_hole_match-crafty.png',
			'chicken_hole-crafty.png',
			'dog_hole_match-crafty.png',
			'dog_hole-crafty.png',
		],
		'sprites' : {
			"tile_spritesheet-crafty.png": {
	            "tile": 350,
	            "tileh": 350,
	            "map": {
	            	'tileAnimals' : [0, 0],
					'tileAnimalsDown' : [0, 1],
					'tileColouring' : [1, 0],
					'tileColouringDown' : [1, 1],
					'tileMatch' : [2, 0],
					'tileMatchDown' : [2, 1],
					'tileNumbers' : [3, 0],
					'tileNumbersDown' : [3, 1],
					'tileShapes' : [4, 0],
					'tileShapesDown' : [4, 1],
					'numberOne' : [5, 0],
					'numberTwo' : [6, 0],
					'numberThree' : [5, 1]
	            }
	        },
			"button_spritesheet-crafty.png": {
	            "tile": 220,
	            "tileh": 220,
	            "map": {
	            	'back' : [0, 0],
					'backDown' : [0, 1],
					'settings' : [1, 0],
					'settingsDown' : [1, 1]
	            }
	        },
			"animals_spritesheet_2.png": {
	            "tile": 350,
	            "tileh": 350,
	            "map": {
					'horse' : [0, 0],
					'cow' : [0, 0],
					'sheep' : [0, 0],
					'pig' : [0, 0],
					'duck' : [0, 0],
					'chicken' : [0, 0],
					'dog' : [0, 0]
	            }
	        },
			"shapes_spritesheet.png": {
	            "tile": 352,
	            "tileh": 352,
	            "map": {
					'circle' : [0, 0],
					'circle_hole' : [0, 1],
					'triangle' : [1, 0],
					'triangle_hole' : [1, 1],
					'square' : [2, 0],
					'square_hole' : [2, 1]
	            }
	        }
		}
	};


	Crafty.load(assetsObj,
		function() {
			Crafty.enterScene('mainMenu');
		},
		function(progress) {
			var splash = Crafty.e('2D, Canvas, Image')
			    .attr({x: positionCorrectionX(gridX * 12, 1280), y: positionCorrectionY(gridY * 7, 720), w: 1280, h: 720})
			    .image('assets/images/logo.png');
			var preloadBar = Crafty.e('2D, Canvas, Image')
				.attr({x:positionCorrectionX((gridX * 12), 600), y:positionCorrectionY(gridY * 14, 20), w: (600 * (progress.percent / 100)), h: 20})
				.image('assets/images/preload-bar.png');
			// console.log(600 * (progress.percent /100));
		},
		function(progress) {
			// console.log('Error - ' + progress);
		}
	);
});