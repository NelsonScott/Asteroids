(function () {

  Asteroids.movingObject  = function movingObject (pos, vel, r, color) {
    this.pos = pos;
    this.vel = vel;
    this.r = r;
    this.color = color;
  }

  Asteroids.movingObject.prototype.draw = function draw(context) {
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

  Asteroids.movingObject.prototype.move = function move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    Asteroids.movingObject.wrap(this.pos);
  }

  Asteroids.movingObject.wrap = function wrap(pos) {
    pos[0] = pos[0] > 900 ? 0 : pos[0];
    pos[0] = pos[0] < 0 ? 900 : pos[0];
    pos[1] = pos[1] > 900 ? 0 : pos[1];
    pos[1] = pos[1] < 0 ? 900 : pos[1];
  }

  Asteroids.movingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    return this.distance(this.pos, otherObject.pos) <= this.r + otherObject.r;
  }

  Asteroids.movingObject.prototype.distance = function distance(pos1, pos2){
    return Math.sqrt( (Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)) );
  }
})();
