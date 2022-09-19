//canvas1

const canvas1 = document.getElementById('canvas1');
const container1 = document.getElementById('container1');
const ctx1 = canvas1.getContext('2d');
console.log(ctx1);

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

let number1 = 0;
let scale1 = 10;

function drawFlower1() {
    let angle = number1 * 2.5;
    let radius = scale1 * Math.sqrt(number1);
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

    number1++;
}

function animate1() {
    //ctx1. clearRect(0, 0, canvas1.width, canvas1.height);
    drawFlower1();
    requestAnimationFrame(animate1);
}

animate1();

//canvas2

const canvas2 = document.getElementById('canvas2');
const container2 = document.getElementById('container2');
const ctx2 = canvas2.getContext('2d');
console.log(ctx2);

canvas2.width = container2.offsetWidth;
canvas2.height = container2.offsetHeight;

let number2 = 0;
let scale2 = 10;

function drawFlower2() {
    let angle = number2 * 6;
    let radius = scale2 * Math.sqrt(number2);
    let positionX = radius * Math.sin(angle) + canvas2.width/2;
    let positionY = radius * Math.cos(angle) + canvas2.height/2;

    ctx2.fillStyle = 'red';
    ctx2.strokeStyle = 'black';
    ctx2.lineWidth = 5;
    ctx2.beginPath();
    ctx2.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.fill();
    ctx2.stroke();

    number2++;
}

function animate2() {
    //ctx2. clearRect(0, 0, canvas2.width, canvas2.height);
    drawFlower2();
    requestAnimationFrame(animate2);
}

animate2();