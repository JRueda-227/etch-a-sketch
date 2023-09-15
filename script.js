const board = document.querySelector('#board');
let rows = document.getElementsByClassName('gridRow');
let columns = document.getElementsByClassName('gridColumn');


function makeGrid() {
    makeRows(16);
    makeColumns(16);
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
            column.addEventListener('click', () => {
                column.style.backgroundColor = 'red';
            })
        }
    }
}