(function() {
  Asteroids.COLOR = "blue";
  Asteroids.RADIUS = 10;

  Asteroids.Asteroid = function Asteroid(pos){
    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(20), Asteroids.RADIUS, Asteroids.COLOR);
  }

  Asteroids.Asteroid.inherits(Asteroids.movingObject);
})();
