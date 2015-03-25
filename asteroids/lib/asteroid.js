(function() {
  var Asteroid = Asteroids.Asteroid = function Asteroid(game, pos){
    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(20), Asteroid.RADIUS, Asteroid.COLOR, game);
  }

  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 10;

  Asteroid.inherits(Asteroids.movingObject);
})();
