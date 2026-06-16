// --- 1. Custom Cursor Logic ---
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Snappy dot cursor
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
});

// Smooth lagging follower ring
gsap.ticker.add(() => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    gsap.set(follower, { x: posX, y: posY });
});

// Cursor hover effects on interactive elements
const interactives = document.querySelectorAll('button, .flame');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(follower, { width: 80, height: 80, background: 'rgba(255,255,255,0.1)', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(follower, { width: 40, height: 40, background: 'transparent', duration: 0.3 });
    });
});

// --- 2. Magnetic Button Logic ---
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Pull the button towards the mouse
        gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
        gsap.to(btn.querySelector('span'), { x: x * 0.2, y: y * 0.2, duration: 0.6, ease: "power2.out" });
    });

    btn.addEventListener('mouseleave', () => {
        // Snap back to center
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        gsap.to(btn.querySelector('span'), { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    });
});

// --- 3. Antigravity Floating Elements ---
function initAntigravity() {
    const floatingElements = document.querySelectorAll('.floating');
    const slowFloatingElements = document.querySelectorAll('.floating-slow');

    floatingElements.forEach(el => {
        gsap.to(el, {
            y: "random(-30, 30)",
            x: "random(-30, 30)",
            rotation: "random(-15, 15)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    slowFloatingElements.forEach(el => {
        gsap.to(el, {
            y: "-=15",
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
}

// --- 4. Initialization & Phase Transitions ---
window.onload = () => {
    initAntigravity();
    
    // Initial entrance animation
    gsap.set('#phase1', { autoAlpha: 1 });
    gsap.fromTo('.fade-up', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );
};

function transitionToPhase(phaseNumber) {
    const currentPhase = document.querySelector('.viewport-section.active');
    const nextPhase = document.getElementById(`phase${phaseNumber}`);

    // Cinematic Crossfade with scale down/up
    const tl = gsap.timeline();

    tl.to(currentPhase.querySelectorAll('.content-wrapper > *'), {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.in"
    })
    .set(currentPhase, { autoAlpha: 0, className: "viewport-section hidden" })
    .set(nextPhase, { className: "viewport-section active" })
    .fromTo(nextPhase, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" })
    .fromTo(nextPhase.querySelectorAll('.content-wrapper > *'), 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }, 
        "-=0.8"
    );
}

// --- 5. Finale Interaction ---
function blowOut() {
    const tl = gsap.timeline();
    
    // Kill the flame
    tl.to('.flame', { scale: 0, opacity: 0, duration: 0.3, ease: "power1.in" })
      // Ambient light goes dark
      .to('.orb', { opacity: 0, duration: 2, ease: "power2.inOut" }, "-=0.3")
      // Reveal the massive text
      .to('#finale-text', { y: 0, opacity: 1, duration: 2, ease: "power3.out" });
}
