(function() {
  var asteroid = Asteroids.Asteroid = function Asteroid(pos){
    this.COLOR = "yellow";
    this.RADIUS = 10;

    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(20), this.RADIUS, this.COLOR);
  }


  asteroid.inherits(Asteroids.movingObject);
})();
