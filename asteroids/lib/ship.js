(function(){
  var Ship = Asteroids.Ship = function Ship(){
    Asteroids.movingObject.call(this, Asteroids.Game.randomPosition(), [0, 0], Ship.SHIPRADIUS, Ship.SHIPCOLOR);
  }

  Ship.SHIPCOLOR = "yellow";
  Ship.SHIPRADIUS = 15;
  Ship.inherits(Asteroids.movingObject);

  Ship.prototype.relocate = function relocate() {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = [0, 0];
  }

  Ship.prototype.power = function (delta) {
    this.vel[0] += delta[0];
    this.vel[1] += delta[1];
  }

  Ship.prototype.fireBullet = function () {
    new Asteroids.bullet();
  };

})();
