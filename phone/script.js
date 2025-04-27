const chatbox = document.getElementById("chatbox");
const form = document.getElementById("chat-form");
const select = document.getElementById("answer");
const videoEl = document.getElementById("bgVideo");
const imgEl = document.getElementById("bgImage");

// Define the branching dialogue structure
const story = {
    start: {
        options: {
            walk: "just for a walk.<br> 淨係行街.",
            no: "not today.<br> 今日忙."
        },
        responses: {
            walk: "do you have everything?<br> 攞齊嘢未?",
            no: "what are you doing instead?<br> 忙咩啫？"
        },
        backgroundImages: {
            walk: "./walk.jpg"
        },
        next: {
            walk: "knowledge_path",
            no: "escape_path"
        }
    },
    knowledge_path: {
        options: {
            nogear: "not really. only black.<br> 冇啊, 就咁着黑色.",
            noneed: "no need.<br> 唔使啦."
        },
        responses: {
            nogear: "i don't either - just look for this.<br> 其實我都冇，淨係記住呢個指示.",
            noneed: "lmao are you serious? they go for everyone.<br> DLLM 你講笑？佢哋咩人都讚."
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
            fear: "im not trying to get arrested tho i got school.<br> 我驚俾人拉. 我仲要返學.",
            sthelse: "i should do something else.<br> 我有其他嘢做.",
        },
        responses: {
            fear: "just dont carry your name. memorize the number.<br> theres like a 30% chance only if you're dumb.<br> 唔帶卡咪得囉. 記住自己number. 你on9咪俾人捉到囉.",
            sthelse: "what are you doing instead? 忙咩啫？"
        },
        backgroundImages: {
            fear: "./permit.jpg"
        },
        next: {
            fear: "map_path",
            sthelse: "escape_path"
        }
    },
    noneed_path: {
        options: {
            rally: "its a rally. i'm not marching.<br> 我唔係諗住動員喎.",
            different: "i'm not gonna get that involved.<br> 我唔想咁投入.",
        },
        responses: {
            rally: "they'll be there regardless and they wont wait for you to do anything first.<br> 佢肯定會出嚟，唔等你郁先.",
            different: "you're already involved and so is everyone else. there's safe houses in wanchai. <br>收皮啦...全香港已經投入. 灣仔有安全."
        },
        backgroundImages: {
            rally: "./raptor.png"
        },
        next: {
            rally: "roach_path",
            different: "roach_path"
        }
    },
    map_path: {
        options: {
            noresponse: "..."
        },
        responses: {
            noresponse: "it starts in victoria and then we'll go from there. last point is chater.<br> 我哋喺公園開始, 跟住睇吓點. 最尾就去遮打."
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
            reponse: "is it that serious? i'll be fine.<br> 使唔使咁誇張呀？"
        },
        responses: {
            reponse: "to them, you're just a roach.<br> 你係曱甴."
        },
        next: null
    },
    escape_path: {
        options: {
            mom: "its my moms bday.<br> 我媽咪生日.",
            work: "i have work.<br> 返工."
        },
        responses: {
            mom: "the trees welcome you, and swallow your path. 啲樹歡迎你，含住你行嘅路",
            work: "you work at a gallery and she doesnt even pay you.<br> 你買咩畫都搵唔到咩錢."
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
        option.innerHTML = options[key];
        select.appendChild(option);
    }
}

populateOptions(story[currentNode].options);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const choice = select.value;
    const option = story[currentNode].options[choice];
    const response = story[currentNode].responses[choice];

    form.querySelector("button").disabled = true;
    // Append user message
    const userMsg = document.createElement("div");
    userMsg.className = "messageText";
    userMsg.innerHTML = option;
    const userMsgContainer = document.createElement("div");
    userMsgContainer.className = "message user flicker jitter";
    const userIcon = document.createElement("div");
    userIcon.innerHTML = "<b>you</b>";
    userIcon.className = "messageIcon";

    userMsgContainer.appendChild(userIcon);
    userMsgContainer.appendChild(userMsg);
    chatbox.appendChild(userMsgContainer);

    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {


        console.log("Current Node:", currentNode);
        console.log("Selected Choice:", choice);
        console.log("Response:", story[currentNode]?.responses[choice]);
        // Append bot response
        const botMsg = document.createElement("div");
        botMsg.className = "messageText";
        botMsg.innerHTML = response;
        const botMsgContainer = document.createElement("div");
        botMsgContainer.className = "message bot glitch";
        const botIcon = document.createElement("div");
        botIcon.innerHTML = "<b>her</b>";
        botIcon.className = "messageIcon";

        botMsgContainer.appendChild(botIcon);
        botMsgContainer.appendChild(botMsg);
        chatbox.appendChild(botMsgContainer);

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
        chatbox.scrollTop = chatbox.scrollHeight;

        form.querySelector("button").disabled = false;
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




    }, timeout = 1500);

    // checkIfStoryCompleted()


});

function checkIfStoryCompleted() {
    // If the current node has no options or responses left, disable the submit button
    const currentOptions = story[currentNode]?.options;
    const currentResponses = story[currentNode]?.responses;

    // Check if there are no more options to choose from or the next node is undefined
    if (!currentOptions || !currentResponses || currentOptions.length === 0 || currentResponses.length === 0 || !story[currentNode].next) {
        console.log("story complete")
        // Disable the submit button because the story is finished
        form.querySelector("button").disabled = true;
    }
}