(function(){
  var Bullet = Asteroids.bullet = function(pos){
    Asteroids.movingObject.call(this, pos, Bullet.VEL, Bullet.RADIUS, Bullet.COLOR);
    console.log("new bullet");
  }

  Bullet.RADIUS = 5;
  Bullet.VEL = [2, 2];
  Bullet.COLOR = "blue";

  Bullet.inherits(Asteroids.movingObject);
})()
