//canvas1

const canvas1 = document.getElementById('canvas1');
const container1 = document.getElementById('container1');
const ctx1 = canvas1.getContext('2d');
console.log(ctx1);

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

let positionX = 100;
let positionY = 100;
let angle = 0;

function drawFlower() {
    ctx1.fillStyle = 'red';
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 5;
    ctx1.beginPath();
    ctx1.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.fill();
    ctx1.stroke();
}

function animate1() {
    ctx1. clearRect(0, 0, canvas1.width, canvas1.height);
    //size += 0.05;
    positionX += 2 * Math.sin(angle);
    positionY += 2 * Math.cos(angle);
    angle += 0.1;
    drawFlower();
    requestAnimationFrame(animate1);
}

animate1();