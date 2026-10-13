/**
 * Rodrigo Heloani Portfolio | Interactive Script
 * - High-DPI Matrix Rain Canvas with Glowing Heads
 * - Matrix Mode Controller (ON / SUAVE / OFF)
 * - Interactive Easter Egg [David vs Golias] with Hacker HUD
 * - Clipboard Copying with Dynamic Toasts
 * - Responsive Mobile Navigation & Scroll Spy
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Matrix Rain Canvas Engine
  // -------------------------------------------------------------------------
  const canvas = document.createElement('canvas');
  canvas.id = 'matrixCanvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let animationFrameId;

  // Characters: Katakana + Hex + Math + Latin
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>=/*#@&';
  const chars = (katakana + latin).split('');

  const fontSize = 16;
  let columns = 0;
  let drops = [];

  function initCanvas() {
    dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    ctx.scale(dpr, dpr);

    columns = Math.floor(window.innerWidth / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      // Stagger initial drop positions
      drops[i] = Math.floor(Math.random() * -50);
    }
  }

  let matrixState = 'OFF'; // Default: 'OFF' (user can cycle to 'ON' or 'SUAVE')
  document.body.classList.add('matrix-off');

  let lastDrawTime = 0;
  const fps = 30;
  const interval = 1000 / fps;

  function renderMatrix(currentTime) {
    animationFrameId = requestAnimationFrame(renderMatrix);

    if (matrixState === 'OFF') return;

    const delta = currentTime - lastDrawTime;
    if (delta < interval) return;
    lastDrawTime = currentTime - (delta % interval);

    // Fade effect over previous frame
    ctx.fillStyle = 'rgba(6, 9, 14, 0.08)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Draw glowing leading head character
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f5a0';
      ctx.shadowBlur = 8;
      ctx.fillText(char, x, y);

      // Trailing character
      if (drops[i] > 1) {
        const trailChar = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = '#00f5a0';
        ctx.shadowBlur = 2;
        ctx.fillText(trailChar, x, y - fontSize);
      }

      // Reset shadow for next operations
      ctx.shadowBlur = 0;

      // Reset drop when it passes bottom
      if (y > window.innerHeight && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  window.addEventListener('resize', () => {
    initCanvas();
  });

  initCanvas();
  requestAnimationFrame(renderMatrix);

  // -------------------------------------------------------------------------
  // 2. Matrix Mode Switcher
  // -------------------------------------------------------------------------
  function cycleMatrixMode() {
    const textEl = document.getElementById('matrixStatusText');

    if (matrixState === 'ON') {
      matrixState = 'SUAVE';
      document.body.classList.add('matrix-dimmed');
      document.body.classList.remove('matrix-off');
      if (textEl) textEl.textContent = 'Matrix: SUAVE';
      showToast('Efeito Matrix: Intensidade Suave');
    } else if (matrixState === 'SUAVE') {
      matrixState = 'OFF';
      document.body.classList.add('matrix-off');
      document.body.classList.remove('matrix-dimmed');
      if (textEl) textEl.textContent = 'Matrix: OFF';
      showToast('Efeito Matrix: Desativado');
    } else {
      matrixState = 'ON';
      document.body.classList.remove('matrix-dimmed', 'matrix-off');
      if (textEl) textEl.textContent = 'Matrix: ON';
      showToast('Efeito Matrix: Ativado');
    }
  }

  // -------------------------------------------------------------------------
  // 3. Toast Notification System
  // -------------------------------------------------------------------------
  function showToast(message, icon = 'fas fa-info-circle') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 2800);
  }

  // -------------------------------------------------------------------------
  // 4. Clipboard Copy Handler
  // -------------------------------------------------------------------------
  function copyTextToClipboard(text, label = 'Item') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${text} copiado para a área de transferência!`, 'fas fa-check-circle');
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`${text} copiado!`, 'fas fa-check-circle');
    } catch (err) {
      showToast(`Não foi possível copiar automaticamente`, 'fas fa-exclamation-triangle');
    }
    document.body.removeChild(tempInput);
  }

  // -------------------------------------------------------------------------
  // 5. Easter Egg Engine: [David vs Golias]
  // -------------------------------------------------------------------------
  let nameClickCount = 0;

  function showMatrixHUDLog(message) {
    let logEl = document.getElementById('matrixLogMsg');
    if (!logEl) {
      logEl = document.createElement('div');
      logEl.id = 'matrixLogMsg';
      logEl.className = 'matrix-log';
      document.body.appendChild(logEl);
    }

    logEl.innerHTML = `<i class="fas fa-terminal"></i> <span>${message}</span>`;

    // Reset animation
    logEl.style.animation = 'none';
    logEl.offsetHeight; // Trigger reflow
    logEl.style.animation = null;
  }

  function openEasterEggModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      showMatrixHUDLog(`[ACESSO TOTAL] Chave mestra criptográfica desbloqueada!`);
    }
  }

  function closeEasterEggModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      nameClickCount = 0;
      showMatrixHUDLog(`[TERMINAL] Sessão redefinida.`);
    }
  }

  // -------------------------------------------------------------------------
  // 6. Global Event Delegation
  // -------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    // A. Toggle Matrix Button
    const matrixBtn = e.target.closest('#toggleMatrixBtn');
    if (matrixBtn) {
      cycleMatrixMode();
      return;
    }

    // B. Mobile Menu Button
    const mobileBtn = e.target.closest('#mobileMenuBtn');
    if (mobileBtn) {
      const navLinks = document.getElementById('navLinks');
      if (navLinks) {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        }
      }
      return;
    }

    // C. Close mobile nav when clicking a nav link
    const navLink = e.target.closest('.nav-item');
    if (navLink) {
      const navLinks = document.getElementById('navLinks');
      const mobileBtnEl = document.getElementById('mobileMenuBtn');
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileBtnEl) {
          const icon = mobileBtnEl.querySelector('i');
          if (icon) icon.className = 'fas fa-bars';
        }
      }
    }

    // D. Copy Buttons
    const copyTarget = e.target.closest('.copy-btn') || e.target.closest('[data-copy]');
    if (copyTarget) {
      const text = copyTarget.getAttribute('data-copy');
      if (text) {
        copyTextToClipboard(text);
      }
      return;
    }

    // E. Easter Egg Clicks on Name
    const nameEl = e.target.closest('#easterEggName');
    if (nameEl) {
      nameClickCount++;

      if (nameClickCount < 12) {
        const remaining = 12 - nameClickCount;
        showMatrixHUDLog(`[DECRYPT] Chave ${nameClickCount}/12 sincronizada... (${remaining} restantes)`);
      } else if (nameClickCount === 12) {
        showMatrixHUDLog(`[ACESSO AUTORIZADO] Decriptografia concluída com sucesso!`);
        openEasterEggModal();
      }
      return;
    }

    // F. Modal Close Button or Backdrop Click
    const closeBtn = e.target.closest('#closeModal');
    const overlay = document.getElementById('modalOverlay');
    if (closeBtn || e.target === overlay) {
      closeEasterEggModal();
    }
  });

  // Keyboard accessibility: Close modal on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEasterEggModal();
    }
  });

  // -------------------------------------------------------------------------
  // 7. Active Scroll Spy Navigation
  // -------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.nav-item');

    let currentSection = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

})();
