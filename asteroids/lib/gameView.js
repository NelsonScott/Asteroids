(function(){

  var GameView = Asteroids.GameView = function GameView(game, context) {
    this.game = game;
    this.context = context;
  }

  GameView.prototype.start = function start() {
    var that = this;
    setInterval( function() {
      that.game.moveObjects();
      that.game.draw(that.context);
      that.game.checkCollisions();
    }, 100);
  }

})();
