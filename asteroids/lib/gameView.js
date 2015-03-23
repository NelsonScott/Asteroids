(function(){


  Asteroids.GameView = function GameView() {
    this.game = new Asteroids.Game();
    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');
  }

  Asteroids.GameView.prototype.start = function start() {
    var that = this;
    setInterval( function() {
      that.game.moveObjects();
      that.game.draw(that.context);
      that.game.checkCollisions();
    }, 20);
  }

})();
