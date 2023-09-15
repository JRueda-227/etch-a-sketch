const board = document.querySelector('#board');
let rows = document.getElementsByClassName('gridRow');
let columns = document.getElementsByClassName('gridColumn');
const button = document.querySelector('#gridSize')
let n;

button.addEventListener('click', () => {
    n = prompt()
    makeGrid();
})

function makeGrid() {
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
            column.addEventListener('mousemove', () => {
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