document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.querySelector(`#display`);
    const ctx = canvas.getContext(`2d`);
    function animate() {
        window.requestAnimationFrame(animate);
        ctx.fillStyle = `#152266`;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = vals['Basics']['Color'];
        ctx.fillRect (canvas.width/(vals['Basics']['Number']*2),canvas.height/(vals['Basics']['Slider']*2),canvas.width/vals['Basics']['Number'],canvas.height/vals['Basics']['Slider']);
    }
    animate();
})