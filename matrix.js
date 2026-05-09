const canvas = document.createElement('canvas');
canvas.id = 'matrixCanvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*'.split('');
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

setInterval(draw, 33);

// Easter Egg Logic
let nameClickCount = 0;

function showMatrixLogOnScreen(message) {
  let logEl = document.getElementById('matrixLogMsg');
  if (!logEl) {
    logEl = document.createElement('div');
    logEl.id = 'matrixLogMsg';
    logEl.className = 'matrix-log';
    document.body.appendChild(logEl);
  }

  logEl.textContent = message;

  // Reset animation
  logEl.style.animation = 'none';
  logEl.offsetHeight; // trigger reflow
  logEl.style.animation = null;
}

// The DOM might not be fully populated initially if main.dart injects it.
// We'll use event delegation on document.body to catch clicks on the name.
document.body.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'easterEggName') {
    nameClickCount++;

    // Matrix style on-screen log
    showMatrixLogOnScreen(`${nameClickCount}`);

    // Fallback to console too
    console.log(
      `%c[MATRIX] Clicks on name: ${nameClickCount}`,
      'color: #0F0; background: #000; font-family: monospace; font-size: 14px; font-weight: bold; padding: 2px 5px; border: 1px solid #0F0;'
    );

    if (nameClickCount == 40) {
      const overlay = document.getElementById('modalOverlay');
      const video = document.getElementById('portfolioVideo');

      if (overlay && video) {
        overlay.classList.add('active');
        video.play().catch(err => console.log("Auto-play blocked, user interaction needed."));
      }
    }
  }
});

// We should also set up the close logic for the modal since the HTML is injected by Dart
document.body.addEventListener('click', (e) => {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('closeModal');
  const video = document.getElementById('portfolioVideo');

  if (overlay && overlay.classList.contains('active')) {
    // Close if click on overlay background or close button
    if (e.target === overlay || e.target === closeBtn || (closeBtn && closeBtn.contains(e.target))) {
      overlay.classList.remove('active');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      // reset counter after modal is closed

      showMatrixLogOnScreen(`Eliminando provas...`);
      console.log(
        `%c[MATRIX] Counter reset.`,
        'color: #0F0; background: #000; font-family: monospace; font-size: 14px; font-weight: bold; padding: 2px 5px; border: 1px solid #0F0;'
      );
    }
  }
});
