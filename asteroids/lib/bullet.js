(function(){
  var Bullet = Asteroids.Bullet = function(pos, vel){
    Asteroids.movingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR);
  }

  Bullet.RADIUS = 2;
  Bullet.COLOR = "blue";

  Bullet.inherits(Asteroids.movingObject);
})()
