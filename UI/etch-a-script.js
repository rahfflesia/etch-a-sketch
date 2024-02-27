//Code for 16x16 Grid
const canvas = document.querySelector('.canvas');
let canvasSquare;

function gridSize(sideLength = 16){
    let squareArea = 500 / sideLength;
    for(let i = 0; i < sideLength; i++){
        const row = document.createElement('div');
        row.setAttribute('style','width:500px');
        canvas.appendChild(row);
        for(let j = 0; j < sideLength; j++){
            let square = document.createElement('div');
            square.setAttribute('style', 'border:solid 1.5px gray;');
            square.style.width = squareArea + "px";
            square.style.height = squareArea + "px";
            square.classList.add('square');
            row.appendChild(square);
        }
    }
    canvasSquare = document.querySelectorAll('.square');
}

gridSize();

const resetCanvasButton = document.querySelector('.reset-canvas');

resetCanvasButton.addEventListener('click', () => {
    for(let i = 0; i < canvasSquare.length; i++){
        let item = canvasSquare[i];
        item.style.backgroundColor = "white";
    }
});

let changeGridSize = document.querySelector('.grid-size');

changeGridSize.addEventListener('click', () => {
    while (canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
    let userInput = prompt("Enter the new grid size");
    gridSize(userInput);
});

canvas.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('square')){
        event.target.style.backgroundColor = "black";
    }
});



