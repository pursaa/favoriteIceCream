$(document).ready(function(){

  var flavors =["Chocolate", "Strawberry", "Vanilla"];
  // For each flavor in our array called flavors.
  flavors.forEach(function(flavor) {
    // Find class for each div and add flavor (chocolate, strawberry, etc).
    $("." + flavor).text(flavor);
  });
});
