document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    alert('Not logged in. Redirecting...');
    window.location.href = 'login.html';
  }

  const userData = JSON.parse(localStorage.getItem(username)) || {};
  
  // Prefill fields
  document.getElementById('bio').value = userData.bio || '';
  document.getElementById('techStacks').value = userData.techStacks || '';
  document.getElementById('level').value = userData.level || '';
  document.getElementById('interests').value = userData.interests || '';
  document.getElementById('profile-pic').src = userData.profilePic || 'default-avatar.png';

  // Save profile
  document.getElementById('profile-form').addEventListener('submit', e => {
    e.preventDefault();
    userData.bio = document.getElementById('bio').value;
    userData.techStacks = document.getElementById('techStacks').value;
    userData.level = document.getElementById('level').value;
    userData.interests = document.getElementById('interests').value;
    localStorage.setItem(username, JSON.stringify(userData));
    alert('Profile saved!');
  });

  // Upload picture
  document.getElementById('upload-pic').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        document.getElementById('profile-pic').src = evt.target.result;
        userData.profilePic = evt.target.result;
        localStorage.setItem(username, JSON.stringify(userData));
      };
      reader.readAsDataURL(file);
    }
  });
});
