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
    this.ship = new AsteroidsGame.Ship();
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

    this.ship.draw(that.ctx);
  };

  Game.prototype.move = function () {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.ship.move();
  };

  Game.prototype.step = function () {
    this.move();
    this.draw();
    //turn this on when actually running the game
    // this.checkCollisions();
  };

  Game.prototype.start = function () {
    this.bindKeyHandlers();
    this.AsteroidsGame.intervalId = setInterval(this.step.bind(this), Game.FPS);
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid) {
       if (that.ship.isCollidedWith(asteroid)) {
         alert("Ship Collision! Game over!");
         that.stop();
       }
    })
  }

  Game.prototype.stop = function() {
    clearInterval(this.AsteroidsGame.intervalId);
  }

  Game.prototype.bindKeyHandlers = function() {
    var that = this;
    key("up", function () { that.ship.power([0,-1])});
    key("down", function () { that.ship.power([0,1])});
    key("left", function () { that.ship.power([-1,0])});
    key("right", function () { that.ship.power([1,0])});
  }

})(this);