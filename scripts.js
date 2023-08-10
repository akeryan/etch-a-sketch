const gridEl = document.getElementById('grid')
const sizeInputEl = document.getElementById('myRange')
const sizeOutputEl = document.getElementById('value')
const colorPickerEl = document.getElementById('color-picker')
const radioFormEl = document.getElementById("radio-form")
const clearBtnEl = document.getElementById('clear')
const myRadio = radioFormEl.elements.coloring_mode

let currentColor = "#ff0000" // default color

colorPickerEl.value = currentColor; // assigning default corlor to the color picker

let cells = []
const width = 512

createGrid(16)

sizeOutputEl.textContent = `${sizeInputEl.value} X ${sizeInputEl.value}`;

clearBtnEl.addEventListener("click", event => {
    cells.map(c => c.style.backgroundColor = "#ffffff")
})

sizeInputEl.addEventListener("input", event => {
    createGrid( event.target.value )
    sizeOutputEl.textContent = `${event.target.value} X ${event.target.value}`;
  });

colorPickerEl.addEventListener("input", event => {
    currentColor = event.target.value
})

function addEventListeners() {
    cells.forEach( cell => {
        cell.addEventListener( 'mouseover', event => {
            switch( myRadio.value ) {
                case 'solid': cell.style.backgroundColor = currentColor
                break
                case 'rainbow': cell.style.backgroundColor = randHexColor()
                break
                case 'erazor': cell.style.backgroundColor = "#ffffff"
                break
            }
        })           
    })
}

function randHexColor() {
    let color = '#'
    for( let i = 0; i < 6; i++) {
        color += (Math.floor(Math.random()*16)).toString(16)
    }
    return color    
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