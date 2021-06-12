function galleryExpandImage(image) {
  // Get the expanded image
  var expandImage = document.getElementById("expanded-image");
  // Get the image text
  var caption = document.getElementById("caption");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImage.src = image.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  caption.innerHTML = image.alt;
  // Show the container element (hidden with CSS)
  expandImage.parentElement.style.display = "block";
}


// function galleryExpandImage(imgs) {
//
//   var expandedImage = $('#expanded-image')
//   var imgText = $('#caption');
//
//   var loc = imgs.src;
//   console.log(loc);
//   expandedImage.prop("src", loc);
//   console.log(expandedImage.prop("src"));
//   imgText.html(imgs.alt);
//
//   expandedImage.css("display", "block");
//
// }
