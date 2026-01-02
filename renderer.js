const canvas = document.getElementById(`display`);
const ctx = canvas.getContext(`2d`);
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = `#152266`;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // Square
    ctx.beginPath();
    ctx.moveTo(vals['Square']['startX']/100*canvas.width,vals['Square']['startY']/100*canvas.height);
    ctx.lineTo(vals['Square']['endX']/100*canvas.width,vals['Square']['startY']/100*canvas.height);
    ctx.lineTo(vals['Square']['endX']/100*canvas.width,vals['Square']['endY']/100*canvas.height);
    ctx.lineTo(vals['Square']['startX']/100*canvas.width,vals['Square']['endY']/100*canvas.height);
    ctx.lineTo(vals['Square']['startX']/100*canvas.width,vals['Square']['startY']/100*canvas.height);
    ctx.closePath();
    ctx.fillStyle = vals['Square']['Color'];
    ctx.fill();
    ctx.stroke();
    // Trapezoid
    /*
    bottom left corner startX  (startX+scale,endY)
    top left corner startY     (startX,startY)
    */
    ctx.beginPath();
    ctx.moveTo(vals['Trapezoid']['startX']/100*canvas.width,vals['Trapezoid']['startY']/100*canvas.height);
    ctx.lineTo(vals['Trapezoid']['endX']/100*canvas.width,vals['Trapezoid']['startY']/100*canvas.height);
    ctx.lineTo(vals['Trapezoid']['endX']/100*canvas.width,vals['Trapezoid']['endY']/100*canvas.height);
    ctx.lineTo(vals['Trapezoid']['startX']/100*canvas.width,vals['Trapezoid']['endY']/100*canvas.height);
    ctx.closePath();
    ctx.fillStyle = vals['Trapezoid']['Color'];
    ctx.fill();
    ctx.stroke();
}
animate();