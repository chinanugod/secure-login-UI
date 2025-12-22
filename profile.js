document.addEventListener("DOMContentLoaded", () => {
const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
  if (!user) {
    alert("Not logged in. Redirecting to login...");
    window.location.href = "index.html";
    return;
  }

  // ===== PREFILL FIELDS =====
  document.getElementById("bio").value = user.bio || "";
  document.getElementById("level").value = user.level || "";
  document.getElementById("interests").value = user.interests || "";

  // Restore profile picture
  if (user.profilePic) {
    document.getElementById("profile-pic").src = user.profilePic;
  }

  // Restore checked tech stacks
  const checkboxes = document.querySelectorAll(
    'details input[type="checkbox"]'
  );

  if (Array.isArray(user.techStacks)) {
    checkboxes.forEach((cb) => {
      if (user.techStacks.includes(cb.value)) {
        cb.checked = true;
      }
    });
  }

  // ===== SAVE PROFILE =====
  document.getElementById("profile-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect checked tech stacks
    const selectedStacks = [];
    checkboxes.forEach((cb) => {
      if (cb.checked) selectedStacks.push(cb.value);
    });

    user.bio = document.getElementById("bio").value.trim();
    user.level = document.getElementById("level").value;
    user.interests = document.getElementById("interests").value.trim();
    user.techStacks = selectedStacks;

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Profile saved successfully!");
  });

  // ===== UPLOAD PROFILE PICTURE =====
  document.getElementById("upload-pic").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      user.profilePic = reader.result;
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      document.getElementById("profile-pic").src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});
