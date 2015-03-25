(function() {
  var Asteroid = Asteroids.Asteroid = function Asteroid(pos){
    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(20), Asteroid.RADIUS, Asteroid.COLOR);
  }

  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 10;

  Asteroid.inherits(Asteroids.movingObject);
})();
