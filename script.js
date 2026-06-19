// Show Surprise Section
function showSurprise() {

    const section = document.getElementById("surprise-section");

    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });

}

// Open Gift Box
function openGift() {

    const giftContent = document.getElementById("gift-content");

    const lid = document.querySelector(".gift-lid");

    lid.style.transform = "translateY(-80px) rotate(-20deg)";

    giftContent.classList.remove("hidden");

    createConfetti();

}

// Background Music
function toggleMusic() {

    const music = document.getElementById("music");

    const btn = document.getElementById("musicBtn");

    if (music.paused) {

        music.play();

        btn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        btn.innerHTML = "🎵 Play Music";

    }

}

// Typewriter Love Letter
const message = `
Dear Dr. Spoorthi ❤️,

Happy Birthday to the most beautiful person in my life.

Thank you for bringing happiness, love, and endless smiles into my world.

You are kind, caring, intelligent, and truly special.

I wish all your dreams come true and your life is filled with success, joy, and unforgettable memories.

Today is your day, and you deserve all the happiness in the universe.

Happy Birthday My Love ❤️

Forever & Always.
`;

let index = 0;

function typeWriter() {

    const target = document.getElementById("typewriter");

    if (!target) return;

    if (index < message.length) {

        target.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 50);

    }

}

window.onload = () => {

    typeWriter();

};

// Floating Hearts Animation
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 400);

// Confetti Effect
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "💖", "🌹", "🎊"][Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = "24px";

        confetti.style.zIndex = "9999";

        confetti.style.transition = "4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = "100vh";

            confetti.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}

// Auto Fireworks Every 15 Seconds
setInterval(() => {

    createConfetti();

}, 15000);

// Smooth Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});