let color = document.getElementById("colorPicker");// Select color input
let table = document.getElementById("pixelCanvas");// Select size input
let elHeight = document.getElementById("inputHeight");
let elWidth = document.getElementById("inputWidth");
let tableBody = document.createElement("tbody");
let body = document.getElementsByTagName("body");
let sizeChoice = document.getElementById("sizePicker");

sizeChoice.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();  
})
function makeGrid() {
$('tr').remove();

table.innerHTML = "";
let x = parseInt(elHeight.value, 10);
let y = parseInt(elWidth.value, 10);

for (let i = 0; i < x; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < y; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.onclick = fillColor;
    }
    tableBody.appendChild(tr);  
    }
    table.appendChild(tableBody);
}

function fillColor() {
    this.style.background = color.value;
}