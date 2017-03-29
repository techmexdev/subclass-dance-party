var PacMan = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node.prepend('<img class="pacman dancer" src="http://www.founditemclothing.com/itgoesto11/wp-content/uploads/2013/06/pacman-facts.png"></img>');
};
PacMan.prototype = Object.create(MakeDancer.prototype);
PacMan.prototype.constructor = PacMan;
PacMan.prototype.oldStep = PacMan.prototype.step;

PacMan.prototype.step = function() {
  this.oldStep.call(this);

  for (var i = 0; i < window.dancers.length - 1; i++) {
    var pac = this.$node.css('left').split('px');
    var topos = window.dancers[i].$node.css('top');
    var t = topos.split('px');
    var leftpos = window.dancers[i].$node.css('left');
    var l = leftpos.split('px');
    if (Math.sqrt((Math.pow((+t[0] - this.top), 2)) + (Math.pow((+l[0] - this.left), 2))) < 100) {
      if (+pac[0] > 11) {
        this.$node.css({left: "-=5"});
      } else {
        this.$node.css({left: "+=5"});
      }
    }
  }
};
