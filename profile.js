document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    alert("Not logged in. Redirecting...");
    window.location.href = "index.html";
    return;
  }

  const profileKey = "profile_" + user.email;
  const savedProfile = JSON.parse(localStorage.getItem(profileKey)) || {};

  // ===== PREFILL =====
  document.getElementById("bio").value = savedProfile.bio || "";
  document.getElementById("level").value = savedProfile.level || "";
  document.getElementById("interests").value = savedProfile.interests || "";

  if (savedProfile.profilePic) {
    document.getElementById("profile-pic").src = savedProfile.profilePic;
  }

  const checkboxes = document.querySelectorAll(
    'details input[type="checkbox"]'
  );

  if (Array.isArray(savedProfile.techStacks)) {
    checkboxes.forEach(cb => {
      if (savedProfile.techStacks.includes(cb.value)) {
        cb.checked = true;
      }
    });
  }

  // ===== SAVE PROFILE =====
  document.getElementById("profile-form").addEventListener("submit", e => {
    e.preventDefault();

    const techStacks = [];
    checkboxes.forEach(cb => {
      if (cb.checked) techStacks.push(cb.value);
    });

    const profileData = {
      bio: document.getElementById("bio").value.trim(),
      level: document.getElementById("level").value,
      interests: document.getElementById("interests").value.trim(),
      techStacks,
      profilePic: savedProfile.profilePic || ""
    };

    localStorage.setItem(profileKey, JSON.stringify(profileData));
    alert("Profile saved successfully!");
  });

  // ===== UPLOAD AVATAR =====
  document.getElementById("upload-pic").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      savedProfile.profilePic = reader.result;
      localStorage.setItem(profileKey, JSON.stringify(savedProfile));
      document.getElementById("profile-pic").src = reader.result;
    };
    reader.readAsDataURL(file);
  });
});


// TODOs:

// remove password after login;  create a popup 
// Disclaimer where visitor can accept the state of 
// the site - then with  the disclaimer that "This is
//  just a porfolio project. At this stage do not use 
//  your real email and password, formulate anything@email.com
//   during signup in order to review this project - 
//   this site is for (idea, MVP, demo) testing. Your 
//   opinions are welcome". this will help wave any 
//   security concern with .php site. this pops up 2000 
//   seconds after loading the login page and the user 
//   reads and accepts or close (button) before 
//   continueing to login.