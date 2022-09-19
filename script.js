//canvas1

const canvas1 = document.getElementById('canvas1');
const container1 = document.getElementById('container1');
const ctx1 = canvas1.getContext('2d');
console.log(ctx1);

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

let size = 0;

function animate1() {
    size++;
    ctx1.fillStyle = 'red';
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 5;
    ctx1.beginPath();
    ctx1.arc(150, 150, size, 0, Math.PI * 2);
    ctx1.closePath();
    ctx1.fill();
    ctx1.stroke();
    requestAnimationFrame(animate1);
}

animate1();