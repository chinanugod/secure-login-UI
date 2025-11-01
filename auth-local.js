// auth-local.js

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // SIGN UP HANDLER
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;

      if (!fullname || !email || !password) {
        alert("Please fill in all fields!");
        return;
      }

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existing = users.find((u) => u.email === email);

      if (existing) {
        alert("User already exists! Try logging in instead.");
        return;
      }

      // Save new user
      users.push({ fullname, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Redirecting to login...");
      window.location.href = "index.html";
    });
  }

  // LOGIN HANDLER
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid email or password.");
        return;
      }

      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert(`Welcome ${user.fullname}!`);
      window.location.href = "dashboard.html";
    });
  }
});