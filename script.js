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

canvas2.width = container2.offsetWidth;
canvas2.height = container2.offsetHeight;

ctx2.globalCompositeOperation = 'destination-over';
hue2= 0;

let number2 = 0;
let scale2 = 10;

function drawFlower2() {
    let angle = number2 * 3.7;
    let radius = scale2 * Math.sqrt(number2);
    let positionX = radius * Math.sin(angle) + canvas2.width/2;
    let positionY = radius * Math.cos(angle) + canvas2.height/2;

    ctx2.fillStyle = 'hsl('+ hue2 +', 100%, 50%';
    ctx2.strokeStyle = 'black';
    ctx2.lineWidth = 2;
    ctx2.beginPath();
    ctx2.arc(positionX, positionY, number2, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.fill();
    ctx2.stroke();

    number2++;
    hue2 += 0.5;
}

function animate2() {
    //ctx2. clearRect(0, 0, canvas2.width, canvas2.height);
    drawFlower2();
    if (number2 > 110) return;
    requestAnimationFrame(animate2);
}

animate2();


//canvas3

const canvas3 = document.getElementById('canvas3');
const container3 = document.getElementById('container3');
const ctx3 = canvas3.getContext('2d');

canvas3.width = container3.offsetWidth;
canvas3.height = container3.offsetHeight;

ctx3.globalCompositeOperation = 'destination-over';

let number3 = 0;
let scale3 = 10;

function drawFlower3() {
    let angle = number3 * 130;
    let radius = scale3 * Math.sqrt(number3);
    let positionX = radius * Math.sin(angle) + canvas3.width/2;
    let positionY = radius * Math.cos(angle) + canvas3.height/2;

    ctx3.fillStyle = 'grey';
    ctx3.strokeStyle = 'black';
    ctx3.lineWidth = 3;
    ctx3.beginPath();
    ctx3.arc(positionX, positionY, number2, 0, Math.PI * 2);
    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();

    number3++;
}

function animate3() {
    //ctx3. clearRect(0, 0, canvas3.width, canvas3.height);
    drawFlower3();
    if (number3 > 110) return;
    requestAnimationFrame(animate3);
}

animate3();

//canvas4

const canvas4 = document.getElementById('canvas4');
const container4 = document.getElementById('container4');
const ctx4 = canvas4.getContext('2d');

canvas4.width = container4.offsetWidth;
canvas4.height = container4.offsetHeight;

ctx4.globalCompositeOperation = 'destination-over';
hue4= 0;

let number4 = 0;
let scale4 = 10;

function drawFlower4() {
    let angle = number4 * 3.7;
    let radius = scale4 * Math.sqrt(number4);
    let positionX = radius * Math.sin(angle) + canvas4.width/2;
    let positionY = radius * Math.cos(angle) + canvas4.height/2;

    ctx4.fillStyle = 'hsl('+ hue4 +', 100%, 50%';
    ctx4.strokeStyle = 'black';
    ctx4.lineWidth = 2;
    ctx4.beginPath();
    ctx4.arc(positionX, positionY, number4, 0, Math.PI * 2);
    ctx4.closePath();
    ctx4.fill();
    ctx4.stroke();

    number4++;
    hue4 += 0.5;
}

function animate4() {
    //ctx4. clearRect(0, 0, canvas4.width, canvas4.height);
    drawFlower4();
    if (number4 > 110) return;
    requestAnimationFrame(animate4);
}

animate4();