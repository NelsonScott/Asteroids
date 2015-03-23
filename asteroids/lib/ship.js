(function(){
  Asteroids.SHIPCOLOR = "blue";
  Asteroids.SHIPRADIUS = 25;

  Asteroids.Ship = function Ship(){
    Asteroids.movingObject.call(this,
    Asteroids.Game.randomPosition(),
    [0, 0],
    Asteroids.SHIPRADIUS,
    Asteroids.SHIPCOLOR);
  }
  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.movingObject);

  Asteroids.Ship.prototype.relocate = function relocate() {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = [0, 0];
  }

})();
