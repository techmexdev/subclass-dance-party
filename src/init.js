$(document).ready(function() {
  window.dancers = [];
  // $('html,body').css('cursor','pacman');
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    time = Math.random() * 1000;
    if(dancerMakerFunctionName === 'PacMan'){
      time = 200;
    }
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var top = Math.max(0, $("body").height() * Math.random());
    var left = Math.max(0, $("body").width() * Math.random());
    var dancer = new dancerMakerFunction(
      top, left,
      time
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    //attach hover quality to dancers
    $('.dancer').hover(function() {
      $(this).css({top: '+=3'});
    }, function() {
      $(this).css({left: '+=1'});
    });

    // if (dancerMakerFunctionName === 'PacMan') {
    //   for (var i = 0; i < window.dancers.length - 1; i++) {
    //     var topos = window.dancers[i].$node.css('top');
    //     var t = topos.split('px');
    //     var leftpos = window.dancers[i].$node.css('left');
    //     var l = leftpos.split('px');
    //     if (Math.sqrt((Math.pow((+t[0] - top), 2)) + (Math.pow((+l[0] - left), 2))) < 100) {
    //       console.log(Math.sqrt((Math.pow((+t[0] - top), 2)) + (Math.pow((+l[0] - left), 2))));
    //       $('.pacman').css({left: "+=50"});
    //     }
    //   }
    // }
    //add run feature to each dancer
//  create array of ghost?
  });

  $('.lineUp').on('click', function() {
    $('.dancer').css({left: 0});
  });

  
});

