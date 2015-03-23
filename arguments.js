var sum = function() {
  var totalSum = 0;

  for (var i = 0; i < arguments.length; i++) {
    totalSum += parseInt(arguments[i]);
  }

  return totalSum;
};

var sumArray = function() {
  var totalSum = 0;

  values = arguments[0];
  for (var i = 0; i < values.length; i++) {
    totalSum += parseInt(values[i]);
  }

  return totalSum;
};

Function.prototype.scottBind = function (context) {
  var bindTimeArgs = Array.prototype.slice.call(arguments, 1);
  var myContext = this;
  return function () {
    var callTimeArgs = [].slice.call(arguments);
    return myContext.apply(context, bindTimeArgs.concat(callTimeArgs));
  }
}

var hella = function(name) {
  console.log(name);
  console.log(arguments);
}

var curriedSum = function(numArgs) {
  var numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      return sumArray(numbers);
    } else {
      return _curriedSum;
    }
  }
}

var newSum = curriedSum(4);
//console.log(newSum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  var args = [];
  var that = this;

  return function _curriedArgs(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return that(args);
    } else {
      return _curriedArgs;
    }
  }
}

var f1 = sumArray.curry(2);
var f2 = f1(4);
var f3 = f2(3);

Function.prototype.inherits = function(parent) {
  function Surrogate(){};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
}

function MovingObject (){};
function Ship() {};
Ship.inherits(MovingObject);

MovingObject.prototype.sayHi = function (name) { console.log("Hello!: " + name);}
Ship.prototype.sayHi("Amit");
Ship.prototype.sayBye = function (name) {console.log("Hello!: " + name);}
MovingObject.prototype.sayBye("Amit");
