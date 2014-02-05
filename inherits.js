Function.prototype.inherits = function(superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();

  superClass.apply(this, arguments);

}


function MovingObject(pos) {
  this.pos = pos;
};

MovingObject.prototype.test = function() {
  console.log("test");
};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);