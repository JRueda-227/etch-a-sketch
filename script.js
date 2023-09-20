const board = document.querySelector('#board');
let rows = document.getElementsByClassName('gridRow');
let columns = document.getElementsByClassName('gridColumn');
const button = document.querySelector('#gridSize');
let n;

button.addEventListener('click', () => {
    askGridSize();
    makeGrid();
})

function askGridSize() {
    do {
        n = prompt();

    } while(n > 32)
}

function makeGrid() {
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove())
    makeRows(n);
    makeColumns(n);
}

function makeRows(numRows) {
    for (let i = 0; i < numRows; i++) {
        let row = document.createElement('div');
        board.appendChild(row).className = 'gridRow';
    }
}

function makeColumns(numColumns) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < numColumns; j++) {
            let column = document.createElement('div');
            rows[j].appendChild(column).className = 'gridColumn';
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = random_bg_color();
            })
        }
    }
}

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    return bgColor;
}