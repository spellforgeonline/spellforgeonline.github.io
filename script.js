const canvasWidth = 600;
const canvasHeight = 600;
const canvas = document.getElementById("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const context = canvas.getContext("2d");
let drawing = Array(canvasHeight).fill(() => Array(canvasWidth).fill(0));
let mouseDown = false;

canvas.addEventListener("mouseenter", (event) => {
    context.beginPath();
});
canvas.addEventListener("mousedown", (event) => {
    mouseDown = true;
    context.beginPath();
});
document.addEventListener("mouseup", () => {
    mouseDown = false;
});

canvas.addEventListener("mousemove", (event) => {
    console.log(mouseDown)
    if (mouseDown)
    {
        context.lineTo(event.clientX, event.clientY, 1, 1);
        context.stroke();
    }
});