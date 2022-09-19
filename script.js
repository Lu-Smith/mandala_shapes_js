//canvas1

const canvas1 = document.getElementById('canvas1');
const container1 = document.getElementById('container1');
const ctx1 = canvas1.getContext('2d');
console.log(ctx1);

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

let number = 0;
let scale = 10;

function drawFlower() {
    let angle = number * 1;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas1.width/2;
    let positionY = radius * Math.cos(angle) + canvas1.height/2;

    ctx1.fillStyle = 'red';
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 5;
    ctx1.beginPath();
    ctx1.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.fill();
    ctx1.stroke();

    number++;
}

function animate1() {
    //ctx1. clearRect(0, 0, canvas1.width, canvas1.height);
    //size += 0.05;
    drawFlower();
    requestAnimationFrame(animate1);
}

animate1();