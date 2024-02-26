function toggleDarkMode() {
  const modeIcon = document.getElementById("mode-icon");
  const modeText = document.getElementById("mode-text");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modeIcon.className = "fas fa-sun";
    modeText.textContent = "Light Mode";
  } else {
    modeIcon.className = "fas fa-moon";
    modeText.textContent = "Dark Mode";
  }
}
