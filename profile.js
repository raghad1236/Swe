document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".profile-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Load saved data from localStorage
  if (localStorage.getItem("profileName")) {
    nameInput.value = localStorage.getItem("profileName");
  }
  if (localStorage.getItem("profileEmail")) {
    emailInput.value = localStorage.getItem("profileEmail");
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent reload

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Save to localStorage (temporary storage)
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileEmail", email);

    // Optional password (for demo only)
    if (passwordInput.value.trim() !== "") {
      localStorage.setItem("profilePassword", passwordInput.value.trim());
    }

    alert("✅ Profile information saved successfully!");
  });
});
