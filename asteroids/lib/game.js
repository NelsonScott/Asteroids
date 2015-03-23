(function(){
  var DIM_X = DIM_Y = 900;
  var NUM_ASTEROIDS = 50;

  Asteroids.Game = function Game () {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = Asteroids.Game.addAsteroids(this.NUM_ASTEROIDS);
    this.ship = new Asteroids.Ship();
  }

  Asteroids.Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  }

  Asteroids.Game.addAsteroids = function (num_asteroids) {
    asteroids = [];
    for (var i = 0; i < num_asteroids; i++ ) {
      asteroids.push(new Asteroids.Asteroid(Asteroids.Game.randomPosition()));
    }

    return asteroids;
  }

  Asteroids.Game.randomPosition = function () {
    var x = Math.random() * DIM_X;
    var y = Math.random() * DIM_Y;
    return [x, y];
  }

  Asteroids.Game.prototype.draw = function(context) {
    context.clearRect(0, 0, DIM_X, DIM_Y);
    var allObjs = this.allObjects();

    allObjs.forEach(function (obj) {
      obj.draw(context);
    })
  }

  Asteroids.Game.prototype.moveObjects = function() {
    var allObjs = this.allObjects();

    for (obj in allObjs){
      allObjs[obj].move();
    }
  }

  Asteroids.Game.prototype.checkCollisions = function() {
    var toDelete = [];

    var allObjs = this.allObjects();
    for (obj1 in allObjs) {
      for (obj2 in allObjs) {
        var object1 = allObjs[obj1];
        var object2 = allObjs[obj2];
        if (object1 !== object2 && object1 instanceof Asteroids.Ship) {
          if (object1.isCollidedWith(object2)) {
            console.log(object1);
            object1.relocate();
          }
        }
      }
    }
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  Asteroids.Game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    var arr = this.asteroids;
    this.asteroids = arr.slice(0, idx).concat(arr.slice(idx+1, arr.length));
  }

})();
