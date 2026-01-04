const canvas = document.getElementById(`display`);
const ctx = canvas.getContext(`2d`);
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = `#152266`;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // Square
    ctx.beginPath();
    ctx.moveTo(37/100*canvas.width,0.14*canvas.height);
    ctx.lineTo(0.49*canvas.width,0.14*canvas.height);
    ctx.lineTo(0.49*canvas.width,0.28*canvas.height);
    ctx.lineTo(0.37*canvas.width,0.28*canvas.height);
    ctx.lineTo(0.37*canvas.width,0.14*canvas.height);
    ctx.fillStyle = '#cc1c1c';
    ctx.fill();
    ctx.stroke();
}
animate();