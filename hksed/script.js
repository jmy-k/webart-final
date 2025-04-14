let body = document.querySelector("body");

const popups = document.querySelectorAll(".draggable");
const closeButtons = document.querySelectorAll(".close");
const subtitles = document.getElementById("subtitles");

document.addEventListener("DOMContentLoaded", () => {
    let video = document.createElement("video");
    video.id = "mainvid";
    video.src = "./hksed.mp4";

    body.appendChild(video);
    video.autoplay = true;

    makeDraggable(subtitles);

    popups.forEach((popup) => {
        makeDraggable(popup);
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const popup = button.parentNode;
            popup.classList.remove("show");
        });
    })

    fetch('./subtitles.txt')
        .then(response => response.text())
        .then(text => typeText(text))
        .catch(error => console.error('Error fetching the file:', error));
});

function makeDraggable(el) {
    let isDragging = false;
    let offsetX, offsetY;

    el.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;

        const onMouseMove = (e) => {
            if (isDragging) {
                el.style.left = `${e.clientX - offsetX}px`;
                el.style.top = `${e.clientY - offsetY}px`;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });


};


setTimeout(() => {
    document.getElementById("popup1").classList.add("show");
}, 1000); // after 1 second

setTimeout(() => {
    document.getElementById("popup2").classList.add("show");
}, 5000); // after 5 seconds

setTimeout(() => {
    document.getElementById("popup3").classList.add("show");
}, 10000); // after 10 seconds

setTimeout(() => {
    document.getElementById("popup4").classList.add("show");
}, 11000); // after 11 seconds

setTimeout(() => {
    document.getElementById("popup5").classList.add("show");
}, 14000); // after 14 seconds

setTimeout(() => {
    document.getElementById("popup6").classList.add("show");
}, 16000); // after 16 seconds

setTimeout(() => {
    document.getElementById("popup7").classList.add("show");
}, 20000); // after 20 seconds

let typingInterval;  // Variable to store the interval ID
// Typing function
function typeText(text) {
    const target = document.getElementById('text');  // Adjust to your target element
    let i = 0;

    typingInterval = setInterval(() => {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);  // Stop the typing when the text is done
        }
    }, 85);  // 30ms per character
}

