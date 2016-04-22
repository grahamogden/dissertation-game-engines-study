/*var cocos2dApp = cc.Application.extend({
    config:document.ccConfig,
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.COCOS2D_DEBUG = this.config["COCOS2D_DEBUG"];
            cc.initDebugSetting();
        cc.setup(this.config["tag"]);
        cc.Loader.getInstance().onloading = function () {
            cc.LoaderScene.shareLoaderScene().draw();
        };
        cc.Loader.getInstance().onload = function () {
            cc.AppController.shareAppController().didFinishLaunchingWithOptions();
        };
        cc.Loader.getInstance().preload([
        ]);
    },
    applicationDidFinishLaunching:function () {
        var director = cc.Director.getInstance();
        director.setDisplayStats(this.config["showFPS"]);
        director.setAnimationInterval(1.0 / this.config["frameRate"]);
        director.runWithScene(new this.startScene());
        return true;
    }
});     
var myApp = new cocos2dApp(CatsKidsGameScene);

*/


/*
if(typeof(Storage) !== "undefined") {
    if(localStorage.getItem("name") !== "undefined" && localStorage.getItem("name") !== null && localStorage.getItem("age") !== NaN && localStorage.getItem("age") !== null && localStorage.getItem("age") !== undefined) {
        
        var gameWidth  = 1920,
            gameHeight = 1080;

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
}*/