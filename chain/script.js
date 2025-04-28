// Select all columns
const columns = document.querySelectorAll('.column');

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
        horizontalHandle.className = "horizontalHandle";
        cell.style.position = 'relative';
        cell.appendChild(horizontalHandle);

        const verticalHandle = document.createElement('div');
        verticalHandle.className = "verticalHandle";
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

//let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let cell10 = document.getElementById("cell10");
let cell11 = document.getElementById("cell11");
let cell12 = document.getElementById("cell12");
let cell13 = document.getElementById("cell13");
let cell14 = document.getElementById("cell14");
let cell15 = document.getElementById("cell15");
let cell16 = document.getElementById("cell16");
let cell17 = document.getElementById("cell17");
let cell18 = document.getElementById("cell18");


cell1.addEventListener("click", function () {
    cell1.classList.remove("show");
    cell16.classList.add("show");
});

cell16.addEventListener("click", function () {
    cell16.classList.remove("show");
    cell1.classList.add("show");
});

cell4.addEventListener("click", function () {
    cell4.classList.remove("show");
    cell14.classList.add("show");
});

cell14.addEventListener("click", function () {
    cell14.classList.remove("show");
    cell4.classList.add("show");
});

cell6.addEventListener("click", function () {
    cell6.classList.remove("show");
    cell13.classList.add("show");
});

cell13.addEventListener("click", function () {
    cell13.classList.remove("show");
    cell6.classList.add("show");
});

cell7.addEventListener("click", function () {
    cell7.classList.remove("show");
    cell17.classList.add("show");
});

cell17.addEventListener("click", function () {
    cell17.classList.remove("show");
    cell7.classList.add("show");
});

cell15.addEventListener("click", function () {
    cell15.classList.remove("show");
    cell5.classList.add("show");
});

cell5.addEventListener("click", function () {
    cell5.classList.remove("show");
    cell15.classList.add("show");
});

cell2.addEventListener("click", function () {
    cell2.classList.remove("show");
    cell9.classList.add("show");
});

cell9.addEventListener("click", function () {
    cell9.classList.remove("show");
    cell2.classList.add("show");
});

cell8.addEventListener("click", function () {
    cell8.classList.remove("show");
    cell11.classList.add("show");
});

cell11.addEventListener("click", function () {
    cell11.classList.remove("show");
    cell8.classList.add("show");
});

cell3.addEventListener("click", function () {
    cell3.classList.remove("show");
    cell12.classList.add("show");
});

cell12.addEventListener("click", function () {
    cell12.classList.remove("show");
    cell3.classList.add("show");
});

cell18.addEventListener("click", function () {
    cell18.classList.remove("show");
    cell10.classList.add("show");
});

cell10.addEventListener("click", function () {
    cell10.classList.remove("show");
    cell18.classList.add("show");
});