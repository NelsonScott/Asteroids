(function(){
  Asteroids.SHIPCOLOR = "blue";
  Asteroids.SHIPRADIUS = 20;

  var ship = Asteroids.Ship = function Ship(bounds){
    Asteroids.movingObject.call(this,
    Asteroids.Game.randomPosition(),
    [0, 0],
    Asteroids.SHIPRADIUS,
    Asteroids.SHIPCOLOR,
    bounds);
  }

  ship.inherits(Asteroids.movingObject);

  ship.prototype.relocate = function relocate() {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = [0, 0];
  }

})();
