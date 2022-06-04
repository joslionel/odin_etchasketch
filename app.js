const container = document.querySelector('div.js-main');
const newSketch = document.querySelector('.newSketchBtn');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const blackBtn = document.getElementById('black');
const randBtn = document.getElementById('random');

let color = '#000000'





function makeNewSketch() {
        userInput = parseInt(prompt("What size canvas do you want?"))
        if (userInput > 100) {
            window.alert('That\s too big, try something less than 100!');
        } else {
            makeGrid(userInput)
        }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function makeGrid(size) {
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: repeat(${size}, 1fr)`);

    while (container.firstChild) {
                container.firstChild.remove()
            }
    
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        
            
        container.appendChild(div);  
    }
}

function changeColour(c) {
    const pixels = document.querySelectorAll('div.square');
    color = c;
    if (color != 'random') {pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', changeBackground = () => {pixel.setAttribute('style', `background-color: ${color}`)});
    });} else if (color == 'random')  {
            pixels.forEach(pixel => {
                pixel.addEventListener('mouseover', changeBackground = () => {
                    color = getRandomColor();
                    pixel.setAttribute('style', `background-color: ${color}`)
                })
            })
            
        };
}





newSketch.addEventListener('click', makeNewSketch);
redBtn.addEventListener('click', changeColor = () => {changeColour('red')})
greenBtn.addEventListener('click', changeColor = () => {changeColour('green')})
blueBtn.addEventListener('click', changeColor = () => {changeColour('blue')})
blackBtn.addEventListener('click', changeColor = () => {changeColour('black')})
randBtn.addEventListener('click', changeColor = () => {changeColour('random')})

makeGrid(16)