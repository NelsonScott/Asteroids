(function(){
  var Ship = Asteroids.Ship = function Ship(game){
    Asteroids.movingObject.call(this, Asteroids.Game.randomPosition(), [0, 0], Ship.SHIPRADIUS, Ship.SHIPCOLOR, game);
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
    var direction = Asteroids.Util.dir(this.vel);
    var bulletVel = [direction[0] + this.vel[0], direction[1] + this.vel[1]];
    this.game.addBullet(new Asteroids.Bullet(this.pos.slice(), bulletVel));
  };

})();
