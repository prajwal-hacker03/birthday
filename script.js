// LOADER

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 2500);

});

// LOVE LETTER

const letter = `
Dear Dr. Spoorthi ❤️,

Happy Birthday to the most beautiful person in my life.

Today is all about celebrating the amazing person you are.

Your smile brightens my darkest days.
Your kindness inspires everyone around you.
Your presence makes every moment special.

I wish you endless happiness,
good health,
great success,
and beautiful memories.

May all your dreams come true.

Thank you for being such a wonderful part of my life.

Happy Birthday spoorthi ❤️

Forever & Always.
`;

let i = 0;

function typeWriter() {

    const target =
    document.getElementById("typewriter");

    if (i < letter.length) {

        target.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

setTimeout(typeWriter, 3000);

// JOURNEY BUTTON

function openJourney() {

    document
    .getElementById("journey")
    .scrollIntoView({
        behavior: "smooth"
    });

}

// MUSIC

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

    }

});

// GIFT BOX

function openGift() {

    document.querySelector(".gift-top")
    .style.transform =
    "translateY(-100px) rotate(-15deg)";

    document.getElementById("gift-content")
    .style.display = "block";

    launchConfetti();

}

// LIGHTBOX GALLERY

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

document
.getElementById("close-lightbox")
.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// FLOATING HEARTS

function createHeart() {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);

// CONFETTI

function launchConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
        document.createElement("div");

        confetti.innerHTML =
        ["🎉","✨","🎊","💖","🌹"]
        [Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = "25px";

        confetti.style.zIndex = "99999";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transition =
            "4s linear";

            confetti.style.top = "110vh";

            confetti.style.transform =
            `rotate(${Math.random()*720}deg)`;

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}

// CELEBRATION BUTTON

function launchCelebration() {

    launchConfetti();

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            launchConfetti();

        }, i * 1000);

    }

}

// SCROLL ANIMATION

const sections =
document.querySelectorAll(".section");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section => {

    observer.observe(section);

});

// PARTICLES

const particles =
document.getElementById("particles");

for (let i = 0; i < 100; i++) {

    const dot =
    document.createElement("span");

    dot.style.left =
    Math.random() * 100 + "%";

    dot.style.top =
    Math.random() * 100 + "%";

    dot.style.animationDelay =
    Math.random() * 10 + "s";

    particles.appendChild(dot);

}
