function galleryExpandImage(imgs) {
  let expandedImage          = $('#expanded-image')
  let expandedImageContainer = $('.expanding-image-container')
  let imgText                = $('#caption');
  let loc                    = imgs.src;
  // console.log(loc);
  // Get the selected image url
  expandedImage.prop("src", loc);
  // console.log(expandedImage.prop("src"));
  // Display the image alternate caption
  imgText.html(imgs.alt);
  // Set the expanded image to display block as it is set to none in the css.
  expandedImageContainer.css("display", "block");
}
