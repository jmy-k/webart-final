let body = document.body;
let mainScreen = document.getElementById("mainscreen");
let tooltip = document.getElementById("tooltip");
let navButtons = document.getElementsByClassName("navButton");
let navButtonArray = Array.from(navButtons);
let mailbox = document.getElementById("mailbox");
let about = document.getElementById("about");
let backgroundMusic = document.getElementById("backgroundMusic");
let musicButton = document.getElementById("musicButton");

let backgroundOverlay = document.getElementById("backgroundOverlay");
let overlayContainer = document.getElementById("overlayContainer");
let titleText = document.getElementById("titleText");
let folderImageContainer;

let aboutText;

let isPlaying = false;

let mailboxAlert = "there's a message";
let messageOpen;
let screen = "home";


document.addEventListener("DOMContentLoaded", function () {
    backgroundMusic.load();  // Manually load the audio file
    musicButton.addEventListener("click", () => {
        console.log("hello")
        togglePlay();
    })


    titleText.addEventListener("click", () => {
        loadHomePage();
        screen = "home";
    })

    if (screen == "home") {
        loadHomePage();
    }

    document.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX - e.clientX / 10 + "px"; // slightly offset from cursor
        tooltip.style.top = e.clientY + 12 + "px";
    });
    navButtonArray.forEach((button) => {
        button.addEventListener("mouseover", () => {
            tooltip.innerHTML = "let's stay here";
            tooltip.style.opacity = 1;
        })
        button.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });

    });



    mailbox.addEventListener("mouseover", () => {
        tooltip.innerHTML = mailboxAlert;
        tooltip.style.opacity = 1;
    })
    mailbox.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
    mailbox.addEventListener("click", () => {
        mailboxAlert = "no unread messages";
        mailbox.classList.remove("alert");
        mailbox.style.backgroundImage = "url('./src/maildefault.png')";
        loadMailPage()
    });

    about.addEventListener("click", () => {
        screen = "about"
        loadAboutPage();
    })
});


function togglePlay() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.style.backgroundImage = "url('./src/paused.png')";
        console.log("pauseeeee")
    } else {
        backgroundMusic.play();
        musicButton.style.backgroundImage = "url('./src/playing.png')";
        console.log("play")
    }
    isPlaying = !isPlaying;
}

function loadHomePage() {
    clearScreen();

    mainScreen.style.justifyContent = "space-between";
    mainScreen.style.alignItems = "center";

    homepageText = document.createElement("div");
    homepageText.id = "homepageText";
    homepageText.innerHTML = "Welcome back.";
    mainScreen.appendChild(homepageText);


    folderImageContainer = document.createElement("div");
    folderImageContainer.id = "folderImageContainer";
    mainScreen.appendChild(folderImageContainer);


    for (let i = 0; i <= 8; i++) {
        let folderImage = document.createElement("img");
        if (i == 0 || i == 8) {
            folderImage.src = "./src/folderbox.png";
            folderImage.classList.add("folderBox");
        }
        else if (i == 1) {
            folderImage.src = "./src/filetitle.png";
            folderImage.classList.add("folderBox");
        }
        else if (i == 2 || i == 3) {
            folderImage.src = "./src/fileleft.png";
            folderImage.classList.add("folderImage");
        }
        else {
            folderImage.src = "./src/fileright.png";
            folderImage.classList.add("folderImage");
        }
        folderImage.id = "folderImage" + i;

        folderImageContainer.appendChild(folderImage);
        folderImage.classList.add("fade-in");
    }


}

function loadMailPage() {
    backgroundOverlay.style.opacity = 0.5;
    messageOpen = "";

    let mailOverlay = document.createElement("div");
    mailOverlay.id = "mailOverlay";
    overlayContainer.appendChild(mailOverlay);

    let mailHeader = document.createElement("div");
    mailHeader.id = "mailHeader";
    mailOverlay.appendChild(mailHeader);

    let closeButton = document.createElement("div");
    closeButton.id = "closeMailbox";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", () => {
        overlayContainer.removeChild(mailOverlay);
        backgroundOverlay.style.opacity = 0;
    })

    mailOverlay.appendChild(closeButton);

    let mailContents = document.createElement("div");
    mailContents.id = "mailContents";
    mailContents.addEventListener("mouseover", () => {
        if (messageOpen == "joinnow") {
            tooltip.innerHTML = "yikes. don't think we're missing out much.";
        }
        else if (messageOpen == "apology") {
            tooltip.innerHTML = "i guess some memories are lost forever.";
        }
        else if (messageOpen == "wemissyou") {
            tooltip.innerHTML = "seems like it's been a while since the last upload."
        }
        else if (messageOpen == "sticky") {
            tooltip.innerHTML = "a potential ally...?"
        }
        else {
            tooltip.innerHTML = "is it okay to read these?"
        }

        tooltip.style.opacity = 1;
    })
    mailContents.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });

    let mailContainer = document.createElement("div");
    mailContainer.id = "mailContainer";

    let typingInterval;  // Variable to store the interval ID

    for (let i = 0; i < 5; i++) {
        let mailItem = document.createElement("div");
        mailItem.classList.add("mailItem");
        mailItem.id = "mailItem" + (i + 1);


        mailContainer.appendChild(mailItem);

        // For the alert item (mailItem 5 in this case)
        if (i == 0) {
            mailItem.addEventListener("click", () => {
                messageOpen = "joinnow"
                // Clear existing text content
                mailContents.textContent = '';
                // Fetch and type the new text
                fetch('./src/joinnow.txt')
                    .then(response => response.text())
                    .then(text => mailContents.innerHTML = text)
                    .catch(err => console.error('Error loading file:', err));

            });

        }
        else if (i == 2) {
            mailItem.addEventListener("click", () => {
                messageOpen = "sticky"

                // Clear existing text content
                mailContents.textContent = '';

                // Fetch and type the new text
                fetch('./src/sticky.txt')
                    .then(response => response.text())
                    .then(text => mailContents.innerHTML = text)
                    .catch(err => console.error('Error loading file:', err));

            });

            mailItem.addEventListener("mouseover", () => {
                tooltip.innerHTML = "once a powerful symbol";
                tooltip.style.opacity = 1;
            })
            mailItem.addEventListener("mouseleave", () => {
                tooltip.style.opacity = "0";
            });
        }
        else if (i == 3) {
            mailItem.addEventListener("click", () => {
                messageOpen = "wemissyou"

                // Clear existing text content
                mailContents.textContent = '';

                // Fetch and type the new text
                fetch('./src/wemissyou.txt')
                    .then(response => response.text())
                    .then(text => mailContents.innerHTML = text)
                    .catch(err => console.error('Error loading file:', err));

            });
        }
        else if (i == 4) {
            mailItem.classList.add("alert");

            // Add click event to reset and type text
            mailItem.addEventListener("click", () => {
                messageOpen = "apology"

                // Clear existing text content
                mailContents.textContent = '';
                mailItem.classList.remove("alert");

                // Fetch and type the new text
                fetch('./src/apology.txt')
                    .then(response => response.text())
                    .then(text => mailContents.innerHTML = text)
                    .catch(err => console.error('Error loading file:', err));

            });

            mailItem.addEventListener("mouseover", () => {
                tooltip.innerHTML = "latest message...";
                tooltip.style.opacity = 1;
            })
            mailItem.addEventListener("mouseleave", () => {
                tooltip.style.opacity = "0";
            });
        }
    }

    // Typing function
    function typeText(text) {
        const target = document.getElementById('mailContents');  // Adjust to your target element
        let i = 0;

        typingInterval = setInterval(() => {
            if (i < text.length) {
                target.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);  // Stop the typing when the text is done
            }
        }, 30);  // 30ms per character
    }




    mailOverlay.appendChild(mailContainer);
    mailOverlay.appendChild(mailContents);
}

function loadAboutPage() {
    clearScreen();
    let aboutPage = document.createElement("div");
    aboutPage.id = "aboutPage";
    aboutPage.style.overflowY = "scroll";

    aboutText = document.createElement("div");
    aboutText.id = "aboutText";

    fetch('./src/about.txt')
        .then(response => response.text())
        .then(text => aboutText.innerHTML = text)
        .catch(err => console.error('Error loading file:', err));

    aboutPage.appendChild(aboutText);

    let founderContainer = document.createElement("div");
    founderContainer.id = "founder";

    navButtonArray.forEach((button) => {
        founderContainer.addEventListener("mouseover", () => {
            tooltip.innerHTML = "<b>the </b> cloud...";
            tooltip.style.opacity = 1;
        })
        founderContainer.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });

    });

    let founderIMG = document.createElement("img");
    founderIMG.src = "./src/founder.jpg";
    founderIMG.id = "founderImage";

    let founderCaption = document.createElement("div");
    founderCaption.textContent = "Our Beloved Founder";
    founderContainer.appendChild(founderIMG);
    founderContainer.appendChild(founderCaption);



    aboutPage.appendChild(founderContainer);
    mainScreen.appendChild(aboutPage);
}

function typeText(text) {
    const target = document.getElementById('mailContents');
    let i = 0;

    function typeNextChar() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, 30); // 30ms delay per character
        }
    }

    typeNextChar();
}

function clearScreen() {
    while (mainScreen.children.length > 2) {
        mainScreen.removeChild(mainScreen.lastChild);
    }
}