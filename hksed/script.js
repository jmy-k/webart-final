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

    video.addEventListener("ended", () => {
        console.log("video ended");
        videoEnd();
    });

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
    document.getElementById("popup1").classList.add("show", "flicker");
}, 1000); // after 1 second

setTimeout(() => {
    document.getElementById("popup2").classList.add("show");
}, 5000); // after 5 seconds

setTimeout(() => {
    document.getElementById("popup3").classList.add("show", "flicker");
}, 10000); // after 10 seconds

setTimeout(() => {
    document.getElementById("popup4").classList.add("show");
}, 11000); // after 11 seconds

setTimeout(() => {
    document.getElementById("popup5").classList.add("show");
}, 14000); // after 14 seconds

setTimeout(() => {
    document.getElementById("popup6").classList.add("show", "flicker");
}, 16000); // after 16 seconds

setTimeout(() => {
    document.getElementById("popup7").classList.add("show");
}, 20000); // after 20 seconds

setTimeout(() => {
    document.getElementById("popup8").classList.add("show");
}, 23000); // after 23 seconds

setTimeout(() => {
    document.getElementById("popup9").classList.add("show", "flicker");
}, 24000); // after 24 seconds

setTimeout(() => {
    document.getElementById("popup10").classList.add("show");
}, 28000); // after 28 seconds

setTimeout(() => {
    document.getElementById("popup11").classList.add("show");
}, 30000); // after 30 seconds

setTimeout(() => {
    document.getElementById("popup12").classList.add("show", "flicker");
}, 34000); // after 34 seconds

setTimeout(() => {
    document.getElementById("popup13").classList.add("show");
}, 36000); // after 36 seconds

setTimeout(() => {
    document.getElementById("popup14").classList.add("show", "flicker");
}, 40000); // after 40 seconds

setTimeout(() => {
    document.getElementById("popup15").classList.add("show");
}, 42000); // after 42 seconds

setTimeout(() => {
    document.getElementById("popup16").classList.add("show", "flicker");
}, 45000); // after 45 seconds

setTimeout(() => {
    document.getElementById("popup17").classList.add("show");
}, 47000); // after 47 seconds

setTimeout(() => {
    document.getElementById("popup18").classList.add("show");
}, 50000); // after 50 seconds

setTimeout(() => {
    document.getElementById("popup19").classList.add("show", "flicker");
}, 52000); // after 52 seconds

setTimeout(() => {
    document.getElementById("popup20").classList.add("show");
}, 55000); // after 55 seconds


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

function videoEnd() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const numPopups = 30;
    const angleIncrement = Math.PI / 6; // 30 degrees
    const radiusIncrement = 10; // px
    const delayBetweenPopups = 100; // ms

    for (let i = 0; i < numPopups; i++) {
        setTimeout(() => {
            const angle = i * angleIncrement;
            const radius = i * radiusIncrement;

            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const popup = document.createElement('div');
            popup.className = 'popup draggable show';
            popup.id = `popup${i + 21}`;

            const close = document.createElement('div');
            close.className = 'close';
            close.textContent = 'X';
            close.onclick = () => popup.remove();

            const img = document.createElement('img');
            if (i % 4 === 0) {
                img.src = './iwant.png';
            }
            else if (i % 3 === 0) {
                img.src = './mutual.png';
            }
            else if (i % 2 === 0) {
                img.src = './iwant2.png';
            }
            else {
                img.src = "./mutual2.png"
            }
            img.alt = '';

            popup.appendChild(close);
            popup.appendChild(img);

            popup.style.position = 'absolute';
            popup.style.left = `${x}px`;
            popup.style.top = `${y}px`;
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.1s ease';

            document.body.appendChild(popup);

            // trigger fade-in
            requestAnimationFrame(() => {
                popup.style.opacity = '1';
            });
            if (i === numPopups - 1) {
                setTimeout(finalFlash, 500);
            }

        }, i * delayBetweenPopups);


    }
}

function finalFlash() {
    const flashImage = document.createElement('img');
    flashImage.src = './power.png'; // your final image
    flashImage.id = "finalFlash"

    document.body.appendChild(flashImage);

    let flashes = 0;
    const maxFlashes = 10; // flashes 3 times (show-hide cycles)

    const flashInterval = setInterval(() => {
        flashImage.style.opacity = (flashImage.style.opacity === '1' ? '0' : '1');
        flashes++;

        if (flashes >= maxFlashes) {
            clearInterval(flashInterval);
            setTimeout(() => {
                body.innerHTML = ""; // remove it after flashing
            }, 10);
        }
    }, 200); // flash every 200ms


}