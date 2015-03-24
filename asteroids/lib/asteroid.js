(function() {
  var asteroid = Asteroids.Asteroid = function Asteroid(pos, bounds){
    this.COLOR = "yellow";
    this.RADIUS = 10;

    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(20), this.RADIUS, this.COLOR, bounds);
  }


  asteroid.inherits(Asteroids.movingObject);
})();
