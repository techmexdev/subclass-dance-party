var GhostDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="ghost dancer" src="http://craziestgadgets.com/wp-content/uploads/2013/01/pac-man-ghost-lamp.gif"></img>');
};
GhostDancer.prototype = Object.create(MakeDancer.prototype);
GhostDancer.prototype.constructor = GhostDancer;
GhostDancer.prototype.oldStep = GhostDancer.prototype.step;

GhostDancer.prototype.step = function() {
  this.oldStep.call(this);
  //this.$node.toggle();
};