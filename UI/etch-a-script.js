//Code for 16x16 Grid
const canvas = document.querySelector('.canvas');
for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.setAttribute('style','width:500px');
    canvas.appendChild(row);
    for(let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.setAttribute('style', 'border:solid 1.5px gray; width:31.25px; height:31.25px');
        square.classList.add('square');
        row.appendChild(square);
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
    
});



