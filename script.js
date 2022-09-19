//canvas1

const canvas1 = document.getElementById('canvas1');
const container1 = document.getElementById('container1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

ctx1.fillStyle = 'red';
ctx1.beginPath();
ctx1.arc(50, 50, 50, 0, Math.PI * 2);
ctx1.closePath();
ctx1.fill();
