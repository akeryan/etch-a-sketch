const gridEl = document.getElementById('grid')
const buttonEl = document.getElementById('size-btn')
let cells = []
const width = 512

createGrid(16)

buttonEl.addEventListener("click", event => {
    let temp = prompt("Enter size: 1-100")
    createGrid(temp)    
})

function addEventListeners() {
    cells.forEach( cell => {
        cell.addEventListener( 'mouseover', event => 
           cell.style.backgroundColor = 'red')
    });
}

function createGrid( sideNum ) {
    cells = []
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