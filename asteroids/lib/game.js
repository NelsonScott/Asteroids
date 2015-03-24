(function(){
  var Game = Asteroids.Game = function Game () {
    this.asteroids = Asteroids.Game.addAsteroids();
    this.ship = new Asteroids.Ship([Game.DIM_X, Game.DIM_Y]);
  }

  Game.DIM_X = 300;
  Game.DIM_Y = 300;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  }

  Game.addAsteroids = function () {
    asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++ ) {
      asteroids.push(new Asteroids.Asteroid(Game.randomPosition(), [Game.DIM_X, Game.DIM_Y]));
    }

    return asteroids;
  }

  Game.randomPosition = function () {
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;
    return [x, y];
  }

  Game.prototype.draw = function(context) {
    context.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var allObjs = this.allObjects();

    allObjs.forEach(function (obj) {
      obj.draw(context);
    })
  }

  Game.prototype.moveObjects = function() {
    var allObjs = this.allObjects();

    for (obj in allObjs){
      allObjs[obj].move();
    }
  }

  Game.prototype.checkCollisions = function() {
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

  Game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    var arr = this.asteroids;
    this.asteroids = arr.slice(0, idx).concat(arr.slice(idx+1, arr.length));
  }

})();
