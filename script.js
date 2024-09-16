const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = "black"
ctx.strokeStyle = "white"

var painting_rn;

/*document.addEventListener("mousemove", (func) => {
    console.log("AAH")
})
window.addEventListener("load", (func) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
})*/

function prepareDrawing(ev){
    painting_rn="yes"
    ctx.moveTo(ev.clientX, ev.clientY)
    ctx.lineTo(ev.clientX+1, ev.clientY+1)
    ctx.stroke();
}

function drawing(ev){
    if (painting_rn != "yes"){
        
        return;
    }
    ctx.lineTo(ev.clientX, ev.clientY);
    ctx.stroke();
}

document.addEventListener("mousemove", drawing)

document.addEventListener("mousedown", (func) => {
    painting_rn="yes"
    
})
document.addEventListener("mousedown", prepareDrawing)

document.addEventListener("mouseup", (func) => {
    painting_rn="no"
    
})
