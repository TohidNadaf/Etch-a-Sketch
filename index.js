// JavaScript to create the 16x16 grid
let container = document.getElementById('container');
let colorPicker = document.getElementById('colorPicker');
let eraserButton = document.getElementById('eraser');

// Set the initial drawing color to black
let currentColor = '#000000';

// Function to change the drawing color when the color picker value changes
colorPicker.addEventListener('input', function () {
    currentColor = colorPicker.value;
});

// Function to set the current color to white (eraser)
eraserButton.addEventListener('click', function () {
    currentColor = '#FFFFFF'; // Set to white for erasing
});

for (let i = 0; i < 16 * 16; i++) {
    let div = document.createElement('div');
    div.style.border = "thin solid black";
    div.className = "grid-item";
    div.style.width = "25px";
    div.style.height = "25px";
    container.appendChild(div);
}

let grid = document.querySelectorAll('.grid-item');
grid.forEach(function (item) {
    item.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = currentColor; // Use the current color for drawing
    });
});


