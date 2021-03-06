(function () {
  var MovingObject = Asteroids.MovingObject  = function MovingObject (pos, vel, r, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.r = r;
    this.color = color;
    this.game = game;
  }

  MovingObject.prototype.draw = function draw(context) {
    var centerX = this.pos[0] + this.r;
    var centerY = this.pos[1] + this.r;
    context.beginPath();
    context.arc(centerX, centerY , this.r, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  MovingObject.prototype.wrap = function wrap(pos) {
    var x_bound = Asteroids.Game.DIM_X;
    var y_bound = Asteroids.Game.DIM_Y;

    pos[0] = pos[0] > x_bound ? 0 : pos[0];
    pos[0] = pos[0] < 0 ? x_bound : pos[0];
    pos[1] = pos[1] > y_bound ? 0 : pos[1];
    pos[1] = pos[1] < 0 ? y_bound : pos[1];
  }

  MovingObject.prototype.move = function move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.wrappable) {
      this.wrap(this.pos);
    } else if (Asteroids.MovingObject.outOfBounds(this.pos)){
      this.game.remove(this);
    }
  }

  MovingObject.outOfBounds = function(pos) {
    var x_bound = Asteroids.Game.DIM_X;
    var y_bound = Asteroids.Game.DIM_Y;

    return (pos[0] < 0 || pos[0] > x_bound) || (pos[1] < 0 || pos[1] > y_bound);
  }

  MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    return this.distance(this.pos, otherObject.pos) <= this.r + otherObject.r;
  }

  MovingObject.prototype.distance = function distance(pos1, pos2){
    return Math.sqrt( (Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)) );
  }
})();
