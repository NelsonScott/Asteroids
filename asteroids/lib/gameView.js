(function(){

  var GameView = Asteroids.GameView = function GameView(game, context) {
    this.game = game;
    this.context = context;
  }

  GameView.FPS = 32;

  GameView.prototype.start = function start() {
    var that = this;
    setInterval( function() {
      that.game.moveObjects();
      that.game.draw(that.context);
      that.game.checkCollisions();
    }, 1000/GameView.FPS);
  }

})();
