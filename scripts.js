const gridEl = document.getElementById('grid')
const cells = []
const num = 16
let width = 512/16;

let i = 0
while( i < num * num ) {
    cells.push(document.createElement("div"))
    cells[i].style.height = `${width}px`
    cells[i].style.width = `${width}px`
    cells[i].style.border = "1px solid black"
    gridEl.append(cells[i])
    i++
}






console.log(gridEl)