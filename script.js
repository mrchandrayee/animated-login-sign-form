// Animated network background
const canvas = document.querySelector("#network");
const ctx = canvas.getContext("2d");
let points = [];
let width = 0, height = 0, dpr = 1;

function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.max(24, Math.min(65, Math.floor(width * height / 19000)));
  points = Array.from({length: count}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - .5) * .28,
    vy: (Math.random() - .5) * .28,
    r: Math.random() * 1.4 + .5
  }));
}
function drawNetwork() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    for (let j = i + 1; j < points.length; j++) {
      const q = points[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 145) {
        ctx.strokeStyle = `rgba(104, 92, 238, ${.23 * (1 - dist / 145)})`;
        ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
    ctx.fillStyle = "rgba(111, 119, 255, .75)";
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
  }
  requestAnimationFrame(drawNetwork);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawNetwork();

// Demo login interaction. Replace with a real authentication endpoint in production.
const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error = document.querySelector("#formError");
const button = document.querySelector("#authenticate");
const loginView = document.querySelector("#loginView");
const successView = document.querySelector("#successView");

form.addEventListener("submit", event => {
  event.preventDefault();
  error.textContent = "";
  if (!email.validity.valid || !email.value.trim()) {
    error.textContent = "Please enter a valid email address.";
    email.focus();
    return;
  }
  if (password.value.length < 4) {
    error.textContent = "Password must contain at least 4 characters.";
    password.focus();
    return;
  }

  button.disabled = true;
  button.classList.add("loading");
  button.querySelector(".button-text").textContent = "Authenticating";

  window.setTimeout(() => {
    loginView.hidden = true;
    successView.hidden = false;
    button.disabled = false;
    button.classList.remove("loading");
    button.querySelector(".button-text").textContent = "Authenticate";
  }, 1500);
});

document.querySelector("#backButton").addEventListener("click", () => {
  successView.hidden = true;
  loginView.hidden = false;
  form.reset();
  error.textContent = "";
  email.focus();
});
