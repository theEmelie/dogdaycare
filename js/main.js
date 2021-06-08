var cycleIndex = 0;
showCycleImages();

function showCycleImages() {
    var slides = document.getElementsByClassName("cycle-images");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    cycleIndex++;
    if (cycleIndex > slides.length)
    {
        cycleIndex = 1
    }
    slides[cycleIndex-1].style.display = "block";
    setTimeout(showCycleImages, 3500); // Change image every 3.5 seconds
}
