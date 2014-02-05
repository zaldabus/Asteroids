(function(root) {
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});

  var Bullet = AsteroidsGame.Bullet = function Bullet(pos, vel) {
    AsteroidsGame.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR);
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "black";
  Bullet.SPEED = 20;

  Bullet.inherits(AsteroidsGame.MovingObject);

})(this);