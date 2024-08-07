document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0; // Hide current image
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1; // Show next image
    }

    // Initial display
    images[currentIndex].style.opacity = 1;

    // Change image every 3 seconds (3000 milliseconds)
    setInterval(showNextImage, 3000);
});
