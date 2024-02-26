//Code for 16x16 Grid
const canvas = document.querySelector('.canvas');
gridSize();

function gridSize(sideLength = 16){
    let squareArea = 500 / sideLength;
    for(let i = 0; i < sideLength; i++){
        const row = document.createElement('div');
        row.setAttribute('style','width:500px');
        canvas.appendChild(row);
        for(let j = 0; j < sideLength; j++){
            const square = document.createElement('div');
            square.setAttribute('style', 'border:solid 1.5px gray;');
            square.style.width = squareArea + "px";
            square.style.height = squareArea + "px";
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}

let canvasSquare = document.querySelectorAll('.square');

canvasSquare.forEach(function(square){
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "#000000";
    })
});

const resetCanvasButton = document.querySelector('.reset-canvas');

resetCanvasButton.addEventListener('click', () => {
    canvasSquare.forEach(function(square){
        square.style.backgroundColor = "white";
    });
});





