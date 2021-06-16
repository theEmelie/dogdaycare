function galleryExpandImage(imgs) {
  let expandedImage          = $('#expanded-image')
  let expandedImageContainer = $('.expanding-image-container')
  let imgText                = $('#caption');
  let loc                    = imgs.src;
  // console.log(loc);
  expandedImage.prop("src", loc);
  // console.log(expandedImage.prop("src"));
  imgText.html(imgs.alt);
  expandedImageContainer.css("display", "block");
}
