const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['red', 'blue', 'green', 'yellow', 'pink', 'violet'];

button.addEventListener('click', changeColor);

function changeColor() {
    const index = parseInt(Math.random() * color.length);
    body.style.background = color[index];
}