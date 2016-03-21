//Checking if the object already exists and setting it to it or having it create a new object
var CatsKids = CatsKids || {};

CatsKids.Login = function(game) {};

CatsKids.Login.prototype = {
	create: function() {
		this.saveAndContinue = this.add.button(this.game.width/2, (this.game.height*0.8), 'uiButtons', this.saveData, this, 'save_and_continue_down.png', 'save_and_continue.png');
		this.saveAndContinue.anchor.set(0.5);
	},
	saveData: function() {
		if(typeof(Storage) !== "undefined") {
		    localStorage.setItem("name", name);
		} else {
		    alert("Sorry! We cannot save your data to your device!");
		}
	}
};