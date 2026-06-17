/**
 * Dr. Spoorthi — Premium Birthday Website
 * Update BIRTH_YEAR to show the correct age counter.
 */
const BIRTH_YEAR = 1995; // ← Change this to Dr. Spoorthi's birth year

/* ============================================
   Age Counter
   ============================================ */
function initAgeCounter() {
  const el = document.getElementById('yearCount');
  if (!el) return;
  const years = new Date().getFullYear() - BIRTH_YEAR;
  el.textContent = years;
}

/* ============================================
   Scroll Reveal
   ============================================ */
function initScrollReveal() {
  const sections = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.reveal-child').forEach((child, i) => {
            child.style.setProperty('--delay', `${i * 0.12}s`);
            child.classList.add('visible');
          });
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );
  sections.forEach((s) => observer.observe(s));

  // Hero visible immediately
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(() => {
      hero.classList.add('visible');
      hero.querySelectorAll('.reveal-child').forEach((child, i) => {
        child.style.setProperty('--delay', `${0.2 + i * 0.15}s`);
        child.classList.add('visible');
      });
    }, 300);
  }
}

/* ============================================
   Balloons
   ============================================ */
const BALLOON_COLORS = [
  '#b76e79', '#f8b4c4', '#d4af37', '#c9a0dc', '#e74c6f',
  '#e8a0a8', '#f4d03f', '#d4a5a5', '#b794f6', '#ff6b8a',
  '#c9a227', '#dda0dd', '#cd7f32'
];

function createBalloons() {
  const container = document.getElementById('balloons');
  if (!container) return;

  const count = 13;
  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const size = 35 + Math.random() * 25;
    const left = Math.random() * 100;
    const duration = 12 + Math.random() * 10;
    const delay = Math.random() * 15;
    const color = BALLOON_COLORS[i % BALLOON_COLORS.length];

    balloon.style.cssText = `
      left: ${left}%;
      --size: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    balloon.innerHTML = `
      <div class="balloon-body" style="background: radial-gradient(circle at 35% 30%, ${lighten(color)}, ${color});"></div>
      <div class="balloon-knot" style="background: ${color};"></div>
      <div class="balloon-string"></div>
    `;
    container.appendChild(balloon);
  }
}

function lighten(hex) {
  return hex + 'cc';
}

/* ============================================
   Butterflies
   ============================================ */
const BUTTERFLY_COLORS = ['#ffd6e0', '#e8b4f8', '#f4d03f', '#ffb6c1', '#dda0dd', '#f0c674'];

function butterflySVG(color) {
  return `
    <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
      <g class="bf-wing-left">
        <ellipse cx="12" cy="15" rx="11" ry="13" fill="${color}" opacity="0.85"/>
        <ellipse cx="10" cy="22" rx="7" ry="6" fill="${color}" opacity="0.7"/>
      </g>
      <ellipse cx="20" cy="15" rx="2" ry="10" fill="#333" opacity="0.6"/>
      <g class="bf-wing-right">
        <ellipse cx="28" cy="15" rx="11" ry="13" fill="${color}" opacity="0.85"/>
        <ellipse cx="30" cy="22" rx="7" ry="6" fill="${color}" opacity="0.7"/>
      </g>
    </svg>
  `;
}

function createButterflies() {
  const container = document.getElementById('butterflies');
  if (!container) return;

  const w = window.innerWidth;
  const h = window.innerHeight;

  const paths = [
    `M 0,${h * 0.8} Q ${w * 0.25},${h * 0.2} ${w * 0.5},${h * 0.6} T ${w},${h * 0.4}`,
    `M 0,${h * 0.3} Q ${w * 0.3},${h * 0.7} ${w * 0.6},${h * 0.3} T ${w},${h * 0.7}`,
    `M 0,${h * 0.5} C ${w * 0.2},${h * 0.1} ${w * 0.4},${h * 0.9} ${w * 0.6},${h * 0.5} S ${w * 0.8},${h * 0.1} ${w},${h * 0.5}`,
    `M 0,${h * 0.6} Q ${w * 0.5},${h * 0.1} ${w},${h * 0.6}`,
    `M 0,${h * 0.4} Q ${w * 0.2},${h * 0.8} ${w * 0.5},${h * 0.3} T ${w},${h * 0.6}`,
    `M 0,${h * 0.7} Q ${w * 0.4},${h * 0.3} ${w * 0.7},${h * 0.8} T ${w},${h * 0.2}`,
    `M 0,${h * 0.2} Q ${w * 0.35},${h * 0.6} ${w * 0.65},${h * 0.2} T ${w},${h * 0.5}`,
    `M 0,${h * 0.55} Q ${w * 0.15},${h * 0.15} ${w * 0.45},${h * 0.55} T ${w * 0.9},${h * 0.25} T ${w},${h * 0.55}`,
    `M 0,${h * 0.45} C ${w * 0.25},${h * 0.75} ${w * 0.5},${h * 0.15} ${w * 0.75},${h * 0.45} S ${w * 0.9},${h * 0.75} ${w},${h * 0.35}`,
    `M 0,${h * 0.35} Q ${w * 0.45},${h * 0.65} ${w},${h * 0.35}`,
  ];

  const count = 10;
  for (let i = 0; i < count; i++) {
    const bf = document.createElement('div');
    bf.className = 'butterfly';
    const size = 24 + Math.random() * 20;
    const duration = 18 + Math.random() * 15;
    const delay = Math.random() * 20;
    const color = BUTTERFLY_COLORS[i % BUTTERFLY_COLORS.length];
    const path = paths[i % paths.length];

    bf.style.cssText = `
      --bf-size: ${size}px;
      offset-path: path('${path}');
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    bf.innerHTML = butterflySVG(color);
    container.appendChild(bf);
  }
}

/* ============================================
   Floating Hearts
   ============================================ */
function createHearts() {
  const container = document.getElementById('heartsLayer');
  if (!container) return;

  const count = 18;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    if (i < 5) heart.classList.add('pulse-near-hero');

    const size = 14 + Math.random() * 16;
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * 12;

    heart.style.cssText = `
      left: ${left}%;
      --heart-size: ${size}px;
      font-size: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    heart.textContent = ['💖', '💗', '💕', '❤️', '💝'][i % 5];
    container.appendChild(heart);
  }
}

/* ============================================
   Background Particles (Canvas)
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 45 : 340,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${p.opacity})`;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      p.opacity += (Math.random() - 0.5) * 0.02;
      p.opacity = Math.max(0.1, Math.min(0.7, p.opacity));
    });
    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  });

  return () => cancelAnimationFrame(animId);
}

/* ============================================
   Cursor Sparkle Trail
   ============================================ */
function initCursorTrail() {
  const container = document.getElementById('cursorTrail');
  if (!container) return;

  const symbols = ['✨', '💖', '⭐', '💫', '🌸'];
  let lastTime = 0;
  const throttle = 50;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < throttle) return;
    lastTime = now;

    const sparkle = document.createElement('span');
    sparkle.className = 'trail-sparkle';
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${e.clientX + (Math.random() - 0.5) * 20}px`;
    sparkle.style.top = `${e.clientY + (Math.random() - 0.5) * 20}px`;
    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);

    // Limit DOM nodes
    while (container.children.length > 30) {
      container.firstChild.remove();
    }
  });
}

/* ============================================
   Confetti Celebration
   ============================================ */
function initConfetti() {
  const btn = document.getElementById('celebrateBtn');
  if (!btn || typeof confetti !== 'function') return;

  btn.addEventListener('click', () => {
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ['#d4af37', '#f8b4c4', '#b76e79', '#f4d03f', '#c9a0dc', '#ff6b8a'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Big center burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
    });

    confetti({
      particleCount: 80,
      spread: 360,
      origin: { y: 0.5, x: 0.5 },
      colors,
      shapes: ['circle', 'square'],
      ticks: 150,
    });

    btn.style.transform = 'scale(1.1)';
    setTimeout(() => { btn.style.transform = ''; }, 200);
  });
}

/* ============================================
   Music Toggle
   ============================================ */
function initMusic() {
  const toggle = document.getElementById('musicToggle');
  const audio = document.getElementById('birthdayMusic');
  if (!toggle || !audio) return;

  toggle.addEventListener('click', async () => {
    try {
      if (audio.paused) {
        await audio.play();
        toggle.classList.add('playing');
        toggle.querySelector('.music-label').textContent = 'Pause Music';
        toggle.querySelector('.music-icon').textContent = '🎶';
      } else {
        audio.pause();
        toggle.classList.remove('playing');
        toggle.querySelector('.music-label').textContent = 'Play Music';
        toggle.querySelector('.music-icon').textContent = '🎵';
      }
    } catch {
      toggle.querySelector('.music-label').textContent = 'Tap to Play';
    }
  });
}

/* ============================================
   Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initAgeCounter();
  initScrollReveal();
  createBalloons();
  createButterflies();
  createHearts();
  initParticles();
  initCursorTrail();
  initConfetti();
  initMusic();
});