(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  if (typeof window.Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  Asteroids.Util.randomVec = function (length) {
    var x = Math.random() * length;
    var y = Math.random() * length;
    return [x, y];
  }

})();
