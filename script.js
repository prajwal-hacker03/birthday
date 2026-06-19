// Wait until the page loads
window.onload = () => {
  const message = document.getElementById("message");

  // Add glowing effect after 3 seconds
  setTimeout(() => {
    message.classList.add("glow");
  }, 3000);

  // Trigger fade-out after 6 seconds
  setTimeout(() => {
    message.classList.add("fadeOut");
  }, 6000);

  // Optional: Redirect after 8 seconds
  setTimeout(() => {
    window.location.href = "https://example.com"; // Replace with your desired page
  }, 8000);
};
