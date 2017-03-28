var PacMan = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="pacman dancer" src="http://www.founditemclothing.com/itgoesto11/wp-content/uploads/2013/06/pacman-facts.png"></img>');
};
PacMan.prototype = Object.create(MakeDancer.prototype);
PacMan.prototype.constructor = PacMan;
PacMan.prototype.oldStep = PacMan.prototype.step;

PacMan.prototype.step = function() {
  this.oldStep.call(this);
  //this.$node.toggle();
};