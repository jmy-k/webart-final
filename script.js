

let mainScreen = document.getElementById("mainscreen");
let screen = "start";
let tooltip = document.getElementById("tooltip");
let navButtons = document.getElementsByClassName("navButton");
let navButtonArray = Array.from(navButtons);

let titleText, loginButton, username, password;

document.addEventListener("DOMContentLoaded", function () {
    if (screen == "start") {
        loadScreenStart();
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
});

function loadScreenStart() {
    screen.innerHTML = "Loading...";
    titleText = document.createElement("div");
    titleText.id = "titleText";
    titleText.innerHTML = "Memory Garden";
    titleText.classList.add("fade-in");
    mainScreen.appendChild(titleText);

    loginButton = document.createElement("div");
    loginButton.id = "loginButton";
    loginButton.classList.add("button", "fade-in");
    loginButton.innerHTML = "login";
    loginButton.addEventListener("click", () => {
        loadScreenLogin();
    });
    mainScreen.appendChild(loginButton);

}

function loadScreenLogin() {
    loginButton.remove();
    titleText.style.transform = "translateY(-250%)";

    let formContainer = document.createElement("div");
    formContainer.id = "formContainer";


    let usernameContainer = document.createElement("div");
    usernameContainer.id = "usernameContainer";
    username = document.createElement("div");
    username.classList.add("fade-in-up");
    username.innerHTML = "username:";
    let usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "usernameInput";
    usernameInput.classList.add("fade-in-up");
    usernameInput.value = "julia_k";
    usernameContainer.appendChild(username);
    usernameContainer.appendChild(usernameInput);


    let passwordContainer = document.createElement("div");
    passwordContainer.id = "passwordContainer";
    password = document.createElement("div");
    password.classList.add("fade-in-up");
    password.innerHTML = "password:";
    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "passwordInput";
    passwordInput.classList.add("fade-in-up");
    passwordInput.value = "password";

    let showPassword = document.createElement("div");
    showPassword.id = "showPassword";
    showPassword.classList.add("fade-in-up");
    showPassword.innerHTML = "show password";
    showPassword.addEventListener("click", () => {
        if (passwordInput.type == "password") {
            passwordInput.type = "text";
            showPassword.innerHTML = "hide password";
        } else {
            passwordInput.type = "password";
            showPassword.innerHTML = "show password";
        }
    });
    showPassword.addEventListener("mouseover", () => {
        tooltip.innerHTML = "can reveal a lot... or nothing at all";
        tooltip.style.opacity = 1;
    });
    showPassword.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });;

    passwordContainer.appendChild(password);
    passwordContainer.appendChild(passwordInput);
    passwordContainer.appendChild(showPassword);

    formContainer.appendChild(usernameContainer);
    formContainer.appendChild(passwordContainer);

    mainScreen.appendChild(formContainer);
    formContainer.classList.add("fade-in-up");

    let goButton = document.createElement("div");
    goButton.id = "goButton";
    goButton.classList.add("button");
    goButton.innerHTML = "go";
    // goButton.classList.add("fade-in-up");
    goButton.style.visibility = "hidden";
    goButton.addEventListener("click", () => {
        usernameInput.value = "username";
        passwordInput.value = "password";
        tooltip.style.opacity = 0;
        clearMainScreen()
        loadScreenWelcome();

    });
    goButton.addEventListener("mouseover", () => {
        tooltip.innerHTML = "just a peek...";
        tooltip.style.opacity = 1;
    })
    goButton.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });

    mainScreen.appendChild(goButton);
    goButton.style.visibility = "visible";
}

function loadScreenWelcome() {
    let welcomeVid = document.createElement("video");
    welcomeVid.id = "welcomeVid";
    welcomeVid.src = "./src/welcomevid.mp4";
    mainScreen.appendChild(welcomeVid);
    welcomeVid.addEventListener("ended", () => {
        welcomeVid.addEventListener("mouseover", () => {
            tooltip.innerHTML = "wow you watched the whole thing!";
            tooltip.style.opacity = 1;
        })
        welcomeVid.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });

    });
    welcomeVid.autoplay = true;
    let nextButton = document.createElement("a");
    nextButton.id = "nextButton";
    nextButton.href = "./home/home.html";
    nextButton.classList.add("button");
    nextButton.innerHTML = "next";
    mainScreen.appendChild(nextButton);


}

function clearMainScreen() {
    while (mainScreen.firstChild) {
        mainScreen.removeChild(mainScreen.firstChild);
    }
}