var GameLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },
    init: function() {
        this._super();
        var size = cc.director.getWinSize();

        var background = cc.Sprite.create(res.BG_IMAGE);
        background.setPosition(size.width / 2, size.height / 2);
        background.setScale(1);
        this.addChild(background, kzindexBG);
    },
    onEnter: function() {
        this._super();
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
    },
    onTouchBegan: function(touch, event) {
        var tp = touch.getLocation();//touch point
        console.log('On touch Began, location.')
        console.log(tp.x.toFixed(2));
        console.log(tp.y.toFixed(2));
        return true;
    },
    onTouchMoved: function(touch, event) {
        var tp = touch.getLocation();//touch point
        console.log('On touch Moved, location.')
        console.log(tp.x.toFixed(2));
        console.log(tp.y.toFixed(2));
    },
    onTouchEnded: function(touch, event) {
        var tp = touch.getLocation();//touch point
        console.log('On touch Ended, location.')
        console.log(tp.x.toFixed(2));
        console.log(tp.y.toFixed(2));
    }
});

GameLayer.scene = function() {
    var scene = new cc.Scene();
    var layer = new GameLayer();
    scene.addChild(layer);
    return scene;
}

window.onload = function() {
    var targetWidth = 1920;
    var targetHeight = 1080;
    
    cc.game.onStart = function(){
        cc.view.adjustViewPort(false);
        cc.view.setDesignResolutionSize(targetWidth, targetHeight, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        //load resources
        cc.LoaderScene.preload(["assets/images/background.png"], function () {                  
        cc.director.runScene(GameLayer.scene());
      }, this);
    };
    cc.game.run("game_canvas");
};