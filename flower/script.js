
const sound = document.getElementById('audio');

const overlay = document.createElement('div'); //circle mask
overlay.classList.add('overlay');
document.body.appendChild(overlay);

document.addEventListener('mousemove', function (e) {
    if (sound.paused) {
        sound.play();
    }
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const spotlightRadiusX = 800;
    const spotlightRadiusY = 500;

    const adjustedX = mouseX + spotlightRadiusX; // Adjust the X position of the mask
    const adjustedY = mouseY + spotlightRadiusY; // Adjust the Y position of the mask

    // Update the mask position to compensate for the offset
    overlay.style.maskPosition = `${adjustedX}px ${adjustedY}px`;
    overlay.style.WebkitMaskPosition = `${adjustedX}px ${adjustedY}px`;

    // Reveal images when spotlight intersects with them
    document.querySelectorAll('.flower').forEach(image => {
        const rect = image.getBoundingClientRect();
        const spotlightRect = overlay.getBoundingClientRect();

        // Check if the spotlight intersects with the image
        if (isIntersecting(rect, spotlightRect)) {
            image.style.opacity = 1;  // Show the image
        } else {
            image.style.opacity = 0;  // Hide the image
        }
    });
});

// Check if two rectangles intersect
function isIntersecting(rect1, rect2) {
    return !(rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top);
}
