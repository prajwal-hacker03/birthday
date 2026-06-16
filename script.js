// Initialization
document.addEventListener('DOMContentLoaded', () => {
    createFireflies();
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').remove(), 1000);
    }, 2000);
});

// Fireflies Effect
function createFireflies() {
    const container = document.getElementById('fireflies');
    for (let i = 0; i < 30; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        firefly.style.animationDuration = (Math.random() * 10 + 5) + 's';
        firefly.style.opacity = Math.random();
        container.appendChild(firefly);
    }
}

// Navigation Logic
function goToPhase2() {
    document.getElementById('phase1').classList.remove('active');
    document.getElementById('phase2').classList.add('active');
}

function openGift() {
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.add('gift-opened');
    
    // Magical Sparkles
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#87ceeb', '#e6e6fa']
    });

    setTimeout(() => {
        giftBox.classList.add('hidden');
        document.getElementById('giftContent').classList.remove('hidden');
        document.getElementById('giftContent').classList.add('fadeInUp');
    }, 800);
}

function goToPhase3() {
    document.getElementById('phase2').classList.remove('active');
    document.getElementById('phase3').classList.add('active');
}

function blowCandle() {
    const flame = document.querySelector('.flame');
    flame.style.display = 'none';
    
    // Big Celebration
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#228B22', '#d4af37']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#228B22', '#d4af37']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    document.getElementById('finalMessage').classList.remove('hidden');
}

// Audio Toggle
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('musicIcon');
    if (music.paused) {
        music.play();
        icon.innerText = '🔊';
    } else {
        music.pause();
        icon.innerText = '🔇';
    }
}
