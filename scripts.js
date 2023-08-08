const gridEl = document.getElementById('grid')
const buttonEl = document.getElementById('size-btn')
const sizeInputEl = document.getElementById('myRange')
const sizeOutputEl = document.getElementById('value')
const colorPickerEl = document.getElementById('color-picker')

let currentColor = "#ff0000" // default color

colorPickerEl.value = currentColor; // assigning default corlor to the color picker

let cells = []
const width = 512

createGrid(16)

// SLIDER SECTION ==========================================================

sizeOutputEl.textContent = `${sizeInputEl.value} X ${sizeInputEl.value}`;

sizeInputEl.addEventListener("input", event => {
    createGrid( event.target.value )
    sizeOutputEl.textContent = `${event.target.value} X ${event.target.value}`;
  });

buttonEl.addEventListener("click", event => {
    let temp = prompt("Enter size: 1-100")
    createGrid(temp)    
})

colorPickerEl.addEventListener("input", event => {
    currentColor = event.target.value
})

function addEventListeners() {
    cells.forEach( cell => {
        cell.addEventListener( 'mouseover', event => 
           cell.style.backgroundColor = currentColor)
    });
}

function createGrid( sideNum ) {
    cells.length = 0
    let num = sideNum * sideNum
    let size = width/sideNum
    let i = 0
    while( i < num ) {
        cells.push(document.createElement("div"))
        cells[i].style.height = `${size}px`
        cells[i].style.width = `${size}px`
        i++
    }
    gridEl.replaceChildren(...cells)
    addEventListeners()
}