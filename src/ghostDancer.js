var GhostDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="ghost dancer" src="http://craziestgadgets.com/wp-content/uploads/2013/01/pac-man-ghost-lamp.gif"></img>');
  this.count = 0;
};
GhostDancer.prototype = Object.create(MakeDancer.prototype);
GhostDancer.prototype.constructor = GhostDancer;
GhostDancer.prototype.oldStep = GhostDancer.prototype.step;

GhostDancer.prototype.step = function() {
  this.oldStep.call(this);
  this.$node.toggle();
  console.log(this.count);
  if (this.count % 2 === 0) {
    this.$node.animate({top: "+=50"}, 200);
    this.count++;
  } else {
    this.$node.animate({top: "-=50"}, 200);
    this.count++;
  }
};

//if PacMan get within 5 px to ghost;
//ghost will move top: 3 left: 3
