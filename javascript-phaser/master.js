if(typeof(Storage) !== "undefined") {
    if(localStorage.getItem("name") !== "undefined" && localStorage.getItem("name") !== null && localStorage.getItem("age") !== NaN && localStorage.getItem("age") !== null && localStorage.getItem("age") !== undefined) {

        var CatsKids = CatsKids || {};

            var gameWidth  = 1920,
                gameHeight = 1080;
            CatsKids.game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game_canvas');

            CatsKids.game.state.add('Boot', CatsKids.Boot);
            CatsKids.game.state.add('Preload', CatsKids.Preload);
            CatsKids.game.state.add('Login', CatsKids.Login);
            CatsKids.game.state.add('MainMenu', CatsKids.MainMenu);
            CatsKids.game.state.add('Settings', CatsKids.Settings);
            CatsKids.game.state.add('GameAnimals', CatsKids.GameAnimals);
            CatsKids.game.state.add('GameColouring', CatsKids.GameColouring);
            CatsKids.game.state.add('GameShapes', CatsKids.GameShapes);
            CatsKids.game.state.add('GameNumbers', CatsKids.GameNumbers);
            CatsKids.game.state.add('GameMatch', CatsKids.GameMatch);
            CatsKids.game.state.start('Boot');
    }
} else {
    alert("Sorry! We cannot save your data to your device!");
}

function saveToStorage() {
    var name = document.forms['signupForm']['name'].value;
    var age = parseInt(document.forms['signupForm']['age'].value);
    console.log(name);
    console.log(jQuery.type(age));
    console.log(age);

    if(name !== '' && !isNaN(age)) {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        return true;
    } else {
        alert("Please enter a valid name and age!");
        return false;
    }
}