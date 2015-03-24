(function(){

  var gameView = Asteroids.GameView = function GameView(game, context) {
    this.game = new Asteroids.Game();
    this.context = context;
  }

  gameView.prototype.start = function start() {
    var that = this;
    setInterval( function() {
      that.game.moveObjects();
      that.game.draw(that.context);
      console.log("Calling draw from gameview");
      that.game.checkCollisions();
    }, 1000);
      // that.game.moveObjects();
      // that.game.draw(that.context);
      // console.log("Calling draw from gameview");
      // that.game.checkCollisions();
    //Switch this back to 200 or so
  }

})();
