let mainScreen = document.getElementById("mainscreen");
let screen = "home";
let tooltip = document.getElementById("tooltip");
let navButtons = document.getElementsByClassName("navButton");
let mailbox = document.getElementById("mailbox");
let navButtonArray = Array.from(navButtons);
let folderImageContainer;
let mailboxAlert = "there's a message";

document.addEventListener("DOMContentLoaded", function () {
    if (screen == "home") {
        loadHomePage();
    }
    document.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX - 100 + "px"; // slightly offset from cursor
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
    });
});


function loadHomePage() {
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
    let mailContainer = document.createElement("div");
    mailContainer.id = "mailContainer";
    document.appendChild(mailContainer);

    let mailTitle = document.createElement("h1");
    mailTitle.innerHTML = "Mail";
    mailTitle.classList.add("fade-in");
    mailContainer.appendChild(mailTitle);

    let mailContent = document.createElement("p");
    mailContent.innerHTML = "You have no unread messages.";
    mailContent.classList.add("fade-in");
    mailContainer.appendChild(mailContent);
}