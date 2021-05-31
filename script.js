const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xPosition = canvas.width / 2;
let yPosition = canvas.height / 2;


let namebd = ['Jean', 'Jimena', 'Brandon', 'Kevin', 'Andy', 'Dragon', 'Bigotes', 'Nuwidara', 'Viva la SQEM', 'Nachito','Gabi'];
let i = 0;
let names = 0;

function draw() {
    numNombre();
    let random = () => {
        return Math.random() * 256;
    }
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '50px serif';
    ctx.fillText(namebd[names], xPosition, yPosition);
    ctx.fillStyle = color;

    if (xPosition > canvas.width) {
        xPosition = 0;
    }

    xPosition += 3;

    window.requestAnimationFrame(draw);
}
function numNombre() {
    i++;
    if (i == 50) {
        i = 0;
        names = Math.floor(Math.random() * namebd.length);
    } else { }
}

window.requestAnimationFrame(draw);