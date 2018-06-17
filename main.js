var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "skyblue";
ctx.lineJoin = "round";
ctx.lineCap = "round";

var isDwraing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = false;

function darwCanvas(e) {
    if (!isDwraing) return;
    ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 500 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }



}


canvas.addEventListener('mousedown', (e) => {
    isDwraing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mousemove', darwCanvas);
canvas.addEventListener('mouseup', () => isDwraing = false);
canvas.addEventListener('mouseout', () => isDwraing = false);