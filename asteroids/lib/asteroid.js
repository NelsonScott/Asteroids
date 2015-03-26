(function() {
  var Asteroid = Asteroids.Asteroid = function Asteroid(game, pos){
    this.wrappable = true;
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(10), Asteroid.RADIUS, Asteroid.COLOR, game);
  }

  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 10;

  Asteroid.inherits(Asteroids.MovingObject);
})();
