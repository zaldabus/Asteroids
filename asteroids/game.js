(function(root) {
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});

  var Game = AsteroidsGame.Game = function Game(ctx) {
    this.ctx = ctx;
    this.asteroids = [AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y),
                      AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y),
                      AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y),
                      AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y),
                      AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y),
                      AsteroidsGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y)];
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.FPS = 30;

  Game.prototype.draw = function () {
    this.ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);

    var that = this;
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
  };

  Game.prototype.move = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.step = function () {
    this.move();
    this.draw();
  };

  Game.prototype.start = function () {
    setInterval(this.step.bind(this), Game.FPS);
  };

})(this);