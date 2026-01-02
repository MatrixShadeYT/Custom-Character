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
    ctx.fillStyle = vals['Basics']['Skin Color'];
    ctx.fill();
    ctx.stroke();
    // Trape
    ctx.beginPath();
    ctx.moveTo((0.3*canvas.width),(0.33*canvas.height));
    ctx.lineTo((0.57*canvas.width),(0.33*canvas.height));
    ctx.lineTo((0.57*canvas.width)-(0.05*canvas.width),(0.52*canvas.height));
    ctx.lineTo((0.3*canvas.width)+(0.05*canvas.width),(0.52*canvas.height));
    ctx.lineTo((0.3*canvas.width),(0.33*canvas.height));
    ctx.fillStyle = vals['Shirt']['Color'];
    ctx.fill();
    ctx.stroke();
    // zoid
    ctx.beginPath();
    ctx.moveTo((0.31*canvas.width),(0.62*canvas.height));
    ctx.lineTo((0.56*canvas.width),(0.62*canvas.height));
    ctx.lineTo((0.56*canvas.width)-(0.04*canvas.width),(0.52*canvas.height));
    ctx.lineTo((0.31*canvas.width)+(0.04*canvas.width),(0.52*canvas.height));
    ctx.lineTo((0.31*canvas.width),(0.62*canvas.height));
    ctx.fillStyle = vals['Pants']['Color'];
    ctx.fill();
    ctx.stroke();
    // female
    if (vals['Basics']['Gender'] == 'feminine') {
        ctx.fillStyle = vals['Shirt']['Accent'];
        ctx.beginPath();
        ctx.arc(0.37*canvas.width,0.4*canvas.height,0.04*canvas.width,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0.5*canvas.width,0.4*canvas.height,0.04*canvas.width,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    // pants
    if (vals['Pants']['Bands'] == 'Belt') {
        ctx.fillStyle = vals['Pants']['Accent'];
        ctx.fillRect(0.34*canvas.width,0.51*canvas.height,0.19*canvas.width,0.03*canvas.height);
    }
}
animate();