document.addEventListener("DOMContentLoaded", () => {
    const cloudsContainer = document.getElementById("clouds");
    const cloudCount = 8; // Adjust for more or fewer clouds

    for (let i = 0; i < cloudCount; i++) {
        createCloud(cloudsContainer);
    }
});

function createCloud(container) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    // Randomize cloud dimensions
    const width = Math.random() * 150 + 100; 
    const height = width * 0.4;
    
    // Randomize positions and speed
    const topPosition = Math.random() * 60; // Keep them in the upper sky
    const duration = Math.random() * 50 + 40; // Speed of drift (seconds)
    const delay = Math.random() * -60; // Negative delay so some clouds start mid-screen

    cloud.style.width = `${width}px`;
    cloud.style.height = `${height}px`;
    cloud.style.top = `${topPosition}%`;
    cloud.style.animationDuration = `${duration}s`;
    cloud.style.animationDelay = `${delay}s`;

    container.appendChild(cloud);
}
