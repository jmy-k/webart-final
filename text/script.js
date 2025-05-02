body = document.querySelector('body');

document.addEventListener('click', () => {
    while (body.children.length > 0) {
        body.removeChild(body.lastChild);
    }
    // body.style.backgroundColor = 'white';
    // body.style.backgroundImage = 'none';
    // body.style.overflowX = 'scroll';
    // body.style.overflowY = 'hidden';

    // createRoom();
})

function createRoom() {
    const room = document.createElement('img');
    room.id = "room";
    room.src = "./text.png";
    body.appendChild(room);
    console.log("room!")
}
