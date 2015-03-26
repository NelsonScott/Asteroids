(function(){
  var Game = Asteroids.Game = function Game () {
    this.asteroids = [];
    this.asteroidsCount = 5;
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
    this.bindKeyHandlers();
  }

  Game.DIM_X = 600;
  Game.DIM_Y = 600;
  Game.MOVES = {
    "w": [ 0, -1],
    "a": [-1,  0],
    "s": [ 0,  1],
    "d": [ 1,  0],
  };

  Game.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    Object.keys(Game.MOVES).forEach(function (k) {
      var move = Game.MOVES[k];
      key(k, function () {
        ship.power(move);
      });
    });

    key("space", function () { ship.fireBullet() });
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship], this.bullets);
  }

  Game.prototype.addBullet = function(bullet) {
    this.bullets.push(bullet);
  }

  Game.prototype.addAsteroids = function (){
    for (var i = 0; i < this.asteroidsCount; i++ ) {
      this.asteroids.push(new Asteroids.Asteroid(this, Game.randomPosition()));
    }
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
    var toRemove = [];
    var allObjs = this.allObjects();

    for (var i = 0; i < allObjs.length; i++) {
      for (var j = 0; j < allObjs.length; j++) {
        var first = allObjs[i];
        var second = allObjs[j];

        if ((first === second) || (!first.isCollidedWith(second))) continue;
        if (!(second instanceof Asteroids.Asteroid)) continue;

        if (first instanceof Asteroids.Ship) {
          first.relocate();
        } else if (first instanceof Asteroids.Bullet) {
          toRemove.push(first);
        }
        toRemove.push(second);
      }
    }

    for (i = 0; i < toRemove.length; i++){
      this.remove(toRemove[i]);
    }
  }

  Game.prototype.checkState = function () {
    if (this.asteroids.length == 0){
      if (this.asteroidsCount <= 80){
        this.asteroidsCount *= 2;
        this.addAsteroids();
      } else {
        this.addAsteroids();
      }
    }
  };

  Game.prototype.remove = function(element) {
    if (element instanceof Asteroids.Asteroid){
      this.asteroids.splice(this.asteroids.indexOf(element), 1);
    } else {
      this.bullets.splice(this.bullets.indexOf(element), 1);
    }
  }

})();
