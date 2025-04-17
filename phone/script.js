const chatbox = document.getElementById("chatbox");
const form = document.getElementById("chat-form");
const select = document.getElementById("answer");
const videoEl = document.getElementById("bgVideo");
const imgEl = document.getElementById("bgImage");

// Define the branching dialogue structure
const story = {
    start: {
        options: {
            walk: "just for a walk.",
            no: "not today."
        },
        responses: {
            walk: "🤖 do you have any gear?",
            no: "🤖 what are you doing instead?"
        },
        next: {
            walk: "knowledge_path",
            no: "escape_path"
        }
    },
    knowledge_path: {
        options: {
            nogear: "not really. only black.",
            noneed: "no need."
        },
        responses: {
            nogear: "🤖 its fine. i don't either - just look for this",
            noneed: "🤖 lmao are you serious? they go for everyone"
        },
        backgroundVideos: {
            nogear: "./umbrella.mp4",
        },
        backgroundImages: {
            noneed: "./raptor.png"
        },
        next: {
            nogear: "nogear_path",
            noneed: "noneed_path"
        }
    },
    nogear_path: {
        options: {
            fear: "im not trying to get arrested tho i got school",

        },
        responses: {
            fear: "🤖 just dont carry your name. memorize the number. theres like a 30% chance only if you're dumb"
        },
        backgroundImages: {
            fear: "./permit.jpg"
        },
        next: {
            fear: "map_path"
        }
    },
    noneed_path: {
        options: {
            rally: "its a rally. i'm not marching"
        },
        responses: {
            rally: "🤖 they'll be there regardless and they wont wait for you to do anything first"
        },
        backgroundImages: {
            rally: "./raptor.png"
        },
        next: {
            rally: "roach_path"
        }
    },
    map_path: {
        options: {
            noresponse: "..."
        },
        responses: {
            noresponse: "🤖 it starts in victoria and then we'll go from there. last point is chater"
        },
        backgroundImages: {
            noresponse: "./map.jpg"
        },
        next: {
            noresponse: "noneed_path"
        }
    },
    roach_path: {
        options: {
            reponse: "is it that serious? i'll be fine"
        },
        responses: {
            reponse: "🤖 you're a roach. thats all you are to them"
        }
    },
    escape_path: {
        options: {
            mom: "its my moms bday",
            work: "i have work"
        },
        responses: {
            mom: "🤖 the trees welcome you, and swallow your path.",
            work: "🤖 you work at a gallery and she doesnt even pay you"
        },
        next: null
    }
};

let currentNode = "start";

function populateOptions(options) {
    select.innerHTML = "";
    for (let key in options) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = options[key];
        select.appendChild(option);
    }
}

populateOptions(story[currentNode].options);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const choice = select.value;

    // Append user message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = "🧍 " + story[currentNode].options[choice];
    chatbox.appendChild(userMsg);

    // Append bot response
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = story[currentNode].responses[choice];
    chatbox.appendChild(botMsg);

    const bgVideo = story[currentNode].backgroundVideos?.[choice];
    const bgImage = story[currentNode].backgroundImages?.[choice];

    // reset both first
    videoEl.classList.remove("active");
    imgEl.classList.remove("active");
    videoEl.pause();

    // set video if available
    if (bgVideo) {
        videoEl.src = bgVideo;
        videoEl.load();
        videoEl.play();
        videoEl.classList.add("active");
    } else if (bgImage) {
        imgEl.src = bgImage;
        imgEl.classList.add("active");
    }

    // Append image if one exists
    if (story[currentNode].images && story[currentNode].images[choice]) {
        const img = document.createElement("img");
        img.src = story[currentNode].images[choice];
        img.alt = "";
        img.style.maxWidth = "100%";
        img.style.marginTop = "0.5em";
        img.classList.add("chat-image");
        img.onload = () => img.classList.add("loaded");
        chatbox.appendChild(img);
    }

    // Advance the story
    const nextNode = story[currentNode].next;
    if (nextNode && story[nextNode[choice]]) {
        currentNode = nextNode[choice];
        populateOptions(story[currentNode].options);
    } else {
        // End of path
        select.disabled = true;
        form.querySelector("button").disabled = true;
    }

    chatbox.scrollTop = chatbox.scrollHeight;
});