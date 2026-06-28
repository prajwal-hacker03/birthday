document.addEventListener("DOMContentLoaded", () => {
    const cloudsContainer = document.getElementById("clouds");
    const cloudCount = 6; // Number of clouds you want on screen

    for (let i = 0; i < cloudCount; i++) {
        createCloud(cloudsContainer, true); // 'true' means they start scattered randomly across the screen
    }

    // Continuously spawn a new cloud off-screen every few seconds to keep the flow going
    setInterval(() => {
        createCloud(cloudsContainer, false); // 'false' means they start strictly from the left edge
    }, 12000);
});

function createCloud(container, isInitialSpawn) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    // Randomize cloud sizes
    const width = Math.random() * 180 + 120; // Width between 120px and 300px
    const height = width * 0.35;
    
    // Randomize vertical position (keeping them in the upper sky area)
    const topPosition = Math.random() * 45; 
    
    // Randomize speed (between 50 and 90 seconds to cross the screen)
    const duration = Math.random() * 40 + 50; 

    cloud.style.width = `${width}px`;
    cloud.style.height = `${height}px`;
    cloud.style.top = `${topPosition}%`;
    cloud.style.animationDuration = `${duration}s`;

    if (isInitialSpawn) {
        // Distribute them across the screen when the page first loads
        const randomStart = Math.random() * -100; // Negative delay simulates they've been moving for a while
        cloud.style.animationDelay = `${randomStart}s`;
    } else {
        // Freshly spawned clouds start fresh from the left
        cloud.style.animationDelay = `0s`;
    }

    // Clean up clouds after they finish moving to prevent lag
    setTimeout(() => {
        cloud.remove();
    }, duration * 1000);

    container.appendChild(cloud);
}
