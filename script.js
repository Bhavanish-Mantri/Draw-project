const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const penBtn = document.getElementById("pen");

let size = 10;
let color = "#000000";
let isPressed = false;
let x, y;
let mode = "draw";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height =
    window.innerHeight - document.querySelector(".toolbox").offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.lineCap = "round";
  ctx.stroke();
}

function setDrawMode() {
  ctx.globalCompositeOperation = "source-over";
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function setEraseMode() {
  ctx.globalCompositeOperation = "destination-out";
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isPressed) return;

  const x2 = e.offsetX;
  const y2 = e.offsetY;

  drawCircle(x2, y2);
  drawLine(x, y, x2, y2);

  x = x2;
  y = y2;
});

increaseBtn.addEventListener("click", () => {
  size = Math.min(size + 5, 50);
  sizeEl.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
  size = Math.max(size - 5, 5);
  sizeEl.innerText = size;
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
  if (mode === "draw") setDrawMode();
});

// Pen mode
penBtn.addEventListener("click", () => {
  mode = "draw";
  setDrawMode();
});

eraserBtn.addEventListener("click", () => {
  mode = "erase";
  setEraseMode();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

sizeEl.innerText = size;
setDrawMode();

