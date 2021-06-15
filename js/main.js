var cycleIndex = 0;
showCycleImages();

function showCycleImages() {
    // Get the cycle-images elements
    var cycles = document.getElementsByClassName("cycle-images");

    // Set all the image elements display: none
    for (var i = 0; i < cycles.length; i++) {
        cycles[i].style.display = "none";
    }

    // Add 1 to index
    cycleIndex++;

    // See if index is bigger than the length of the elements. If so set index to 1
    if (cycleIndex > cycles.length) {
        cycleIndex = 1;
    }

    // Set display: block on the first image
    cycles[cycleIndex-1].style.display = "block";

    // Change image every 5 seconds
    setTimeout(showCycleImages, 5000);
}

// function cycleImages() {
//     var cycles = $(".cycle-images");
//
//      $('.cycle-images').css({
//          'display': 'none'
//      });
//
//      cycleIndex++;
//      if (cycleIndex > cycles.length) {
//          cycleIndex = 1
//      }
//
//      $(".cycle-images").next().css({"display": "block"});
//      setTimeout(cycleImages, 3500);
// }
