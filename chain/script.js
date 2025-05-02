// Select all columns
const columns = document.querySelectorAll('.column');

let lavender = document.createElement('img');
lavender.src = "src/lavender1.png";
lavender.id = "lavender";
lavender.className = "smallImage"

let watch = document.createElement('img');
watch.src = "src/watch1.png";
watch.id = "watch";
watch.className = "smallImage"


let skates = document.createElement('img');
skates.src = "src/skates1.png";
skates.id = "skates";
skates.className = "smallImage"


let hair = document.createElement('img');
hair.src = "src/hair1.png";
hair.id = "hair";
hair.className = "smallImage"

let medicine = document.createElement('img');
medicine.src = "src/medicine1.png";
medicine.id = "medicine";
medicine.className = "smallImage"

let bag = document.createElement('img');
bag.src = "src/bag1.png";
bag.id = "bag";
bag.className = "smallImage"

let book = document.createElement('img');
book.src = "src/book1.png";
book.id = "book";
book.className = "smallImage"

// Function to handle resizing
let isResizingWidth = false;
let startX = 0;
let startWidth = 0;

let isResizingHeight = false;
let startY = 0;
let startHeight = 0;

let resizableCell = null;

// Add mouse down event on each column's cell for width resizing
columns.forEach(column => {
    const cells = column.querySelectorAll('.cell');

    cells.forEach(cell => {
        // Create a handle to resize horizontally (at the right side of the cell)
        const horizontalHandle = document.createElement('div');
        horizontalHandle.className = "horizontalHandle handleBorder";
        cell.style.position = 'relative';
        cell.appendChild(horizontalHandle);

        const verticalHandle = document.createElement('div');
        verticalHandle.className = "verticalHandle handleBorder";
        cell.appendChild(verticalHandle);


        // When mouse is pressed on the horizontal handle, start horizontal resizing
        horizontalHandle.addEventListener('mousedown', (e) => {
            isResizingWidth = true;
            startX = e.clientX;
            startWidth = cell.offsetWidth;
            resizableCell = cell;
            document.body.style.cursor = 'col-resize'; // change cursor to resize
        });

        // When mouse is pressed on the horizontal handle, start horizontal resizing
        verticalHandle.addEventListener('mousedown', (e) => {
            isResizingHeight = true;
            startY = e.clientY;
            startHeight = cell.offsetHeight;
            resizableCell = cell;
            document.body.style.cursor = 'row-resize'; // change cursor to resize
        });
    });
});

// Mousemove event for resizing width
document.addEventListener('mousemove', (e) => {
    if (isResizingWidth) {
        const diffWidth = e.clientX - startX;
        const newWidth = startWidth + diffWidth;
        // Only resize the parent column
        const parentColumn = resizableCell.closest('.column');
        // parentColumn.style.width = newWidth + 'px';
        parentColumn.style.flex = `0 0 ${newWidth}px`;

        // Now adjust all sibling cells inside this column
        const siblingCells = parentColumn.querySelectorAll('.cell');
        siblingCells.forEach(cell => {
            cell.style.width = '100%'; // make sure cells just fill the parent column
        });
    }
    if ((isResizingHeight)) {
        const parentColumn = resizableCell.closest('.column');

        const diffHeight = e.clientY - startY;
        const newHeight = startHeight + diffHeight;
        resizableCell.style.height = newHeight + 'px';
        // parentColumn.style.flex = `0 0 ${newHeight}px`;

    }
    else return;
});


// Mouseup event to stop resizing
document.addEventListener('mouseup', () => {
    isResizingWidth = false;
    isResizingHeight = false;
    document.body.style.cursor = 'auto'; // reset cursor
});

let chain1 = document.getElementById("chain1");
let chain2 = document.getElementById("chain2");
let chain3 = document.getElementById("chain3");
let chain4 = document.getElementById("chain4");
let chain5 = document.getElementById("chain5");
let chain6 = document.getElementById("chain6");
let chain7 = document.getElementById("chain7");
let chain8 = document.getElementById("chain8");
let chain9 = document.getElementById("chain9");
let chain10 = document.getElementById("chain10");
let chain11 = document.getElementById("chain11");
let chain12 = document.getElementById("chain12");
let chain13 = document.getElementById("chain13");
let chain14 = document.getElementById("chain14");
let chain15 = document.getElementById("chain15");
let chain16 = document.getElementById("chain16");
let chain17 = document.getElementById("chain17");
let chain18 = document.getElementById("chain18");


chain1.addEventListener("click", function () {
    chain1.classList.remove("show");
    cell1.appendChild(lavender);
    chain16.classList.add("show");
});

chain16.addEventListener("click", function () {
    chain16.classList.remove("show");
    cell1.removeChild(lavender);
    chain1.classList.add("show");
});

chain4.addEventListener("click", function () {
    chain4.classList.remove("show");
    chain14.classList.add("show");
});

chain14.addEventListener("click", function () {
    chain14.classList.remove("show");
    chain4.classList.add("show");
});

chain6.addEventListener("click", function () {
    chain6.classList.remove("show");
    cell6.appendChild(book)
    chain13.classList.add("show");
});

chain13.addEventListener("click", function () {
    chain13.classList.remove("show");
    cell6.removeChild(book)
    chain6.classList.add("show");
});

chain7.addEventListener("click", function () {
    chain7.classList.remove("show");
    cell17.removeChild(watch);
    chain17.classList.add("show");
});

chain17.addEventListener("click", function () {
    chain17.classList.remove("show");
    cell17.appendChild(watch);
    chain7.classList.add("show");
});

chain15.addEventListener("click", function () {
    chain15.classList.remove("show");
    cell15.appendChild(bag);
    chain5.classList.add("show");
});

chain5.addEventListener("click", function () {
    chain5.classList.remove("show");
    chain15.classList.add("show");
    cell15.removeChild(bag);
});

chain2.addEventListener("click", function () {
    chain2.classList.remove("show");
    chain9.classList.add("show");
    cell9.removeChild(medicine);
});

chain9.addEventListener("click", function () {
    chain9.classList.remove("show");
    cell9.appendChild(medicine);
    chain2.classList.add("show");
});

chain8.addEventListener("click", function () {
    chain8.classList.remove("show");
    chain11.classList.add("show");
});

chain11.addEventListener("click", function () {
    chain11.classList.remove("show");
    chain8.classList.add("show");
});

chain3.addEventListener("click", function () {
    chain3.classList.remove("show");
    cell12.removeChild(skates);

    chain12.classList.add("show");
});

chain12.addEventListener("click", function () {
    chain12.classList.remove("show");
    cell12.appendChild(skates);
    chain3.classList.add("show");
});

chain18.addEventListener("click", function () {
    chain18.classList.remove("show");
    cell18.appendChild(hair);
    chain10.classList.add("show");
});

chain10.addEventListener("click", function () {
    chain10.classList.remove("show");
    chain18.classList.add("show");
    cell18.removeChild(hair);
});