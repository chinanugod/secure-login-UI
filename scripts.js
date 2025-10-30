window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const body = document.body;

  setTimeout(() => {
    splash.classList.add("hidden");
    body.classList.add("loaded"); // fade in main content
    setTimeout(() => {
      splash.style.display = "none";
    }, 1000); // wait for fade transition
  }, 2500); // show splash for 2.5s
});

