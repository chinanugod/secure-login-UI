window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const body = document.body;

  // Start fade-out for splash
  splash.style.opacity = "0";

  // After fade, hide splash and fade-in main content
  setTimeout(() => {
    splash.style.display = "none";
    body.classList.add("loaded");
  }, 1000); // matches transition duration
});
