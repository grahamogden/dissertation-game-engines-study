//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.Settings = function(game) {};

CatsKids.Settings.prototype = {
	create: function() {
		this.background = this.add.sprite(0,0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

		deleteSavedData = this.game.add.text(this.game.width/2, this.game.height/2, 'Tap/Click to remove saved data', { font: '30px Arial', fill: '#FFFFFF', align: 'center' });
		deleteSavedData.anchor.set(0.5);
	    deleteSavedData.inputEnabled = true;
	    deleteSavedData.events.onInputUp.add(function () {
			// localStorage.removeItem("name");
			// localStorage.removeItem("age");
			localStorage.clear();
	        setTimeout(function() {
	        	alert('Deleted your saved data.');
	        }, 600);
	    });
	}
};