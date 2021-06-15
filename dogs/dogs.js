let zoom     = $('#zoom-images');
let imgOne   = $('#dogImage');
let imgTwo   = $('#dogImageTwo');
let imgThree = $('#dogImageThree');
let zoomImg  = $('#images');
let caption  = $('#caption');
let close    = $('.closeButton');

// When user clicks on the specific image it changes display to block, shows the image and its alternate caption
imgOne.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "../img/allDogs/max.jpg")
    caption.html(this.alt);
})

imgTwo.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "../img/allDogs/bonzo.jpg")
    caption.html(this.alt);
})

imgThree.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "../img/allDogs/ida.jpg")
    caption.html(this.alt);
})

// When user clicks on the cross it changes display to none
close.on('click', function() {
    zoom.css('display', 'none');
})
