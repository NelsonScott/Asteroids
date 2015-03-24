(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  if (typeof window.Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  };

  Function.prototype.inherits = function (ParentClass) {
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function (length) {
    var x = Math.random() * length;
    var y = Math.random() * length;
    return [x, y];
  };

})();
