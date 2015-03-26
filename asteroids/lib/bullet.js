(function(){
  var Bullet = Asteroids.Bullet = function(pos, vel, game){
    this.wrappable = false;
    Asteroids.movingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR, game);
  }

  Bullet.RADIUS = 2;
  Bullet.COLOR = "blue";

  Bullet.inherits(Asteroids.movingObject);
})()
