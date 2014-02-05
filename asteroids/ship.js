(function(root) {
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});

  var Ship = AsteroidsGame.Ship = function Ship() {
    AsteroidsGame.MovingObject.call(this, [250,250], [1,1], Ship.RADIUS, Ship.COLOR);
  };

  Ship.RADIUS = 20;
  Ship.COLOR = "red";

  Ship.inherits(AsteroidsGame.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})(this);