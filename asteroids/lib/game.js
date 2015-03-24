(function(){
  var DIM_X = DIM_Y = 300;
  var NUM_ASTEROIDS = 5;

  var game = Asteroids.Game = function Game () {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = Asteroids.Game.addAsteroids(this.NUM_ASTEROIDS);
    this.ship = new Asteroids.Ship();
  }

  game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  }

  game.addAsteroids = function (num_asteroids) {
    asteroids = [];
    for (var i = 0; i < num_asteroids; i++ ) {
      asteroids.push(new Asteroids.Asteroid(game.randomPosition()));
    }

    return asteroids;
  }

  game.randomPosition = function () {
    var x = Math.random() * DIM_X;
    var y = Math.random() * DIM_Y;
    return [x, y];
  }

  game.prototype.draw = function(context) {
    context.clearRect(0, 0, DIM_X, DIM_Y);
    var allObjs = this.allObjects();

    allObjs.forEach(function (obj) {
      obj.draw(context);
    })
  }

  game.prototype.moveObjects = function() {
    var allObjs = this.allObjects();

    for (obj in allObjs){
      allObjs[obj].move();
    }
  }

  game.prototype.checkCollisions = function() {
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

  game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    var arr = this.asteroids;
    this.asteroids = arr.slice(0, idx).concat(arr.slice(idx+1, arr.length));
  }

})();
