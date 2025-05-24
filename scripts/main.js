const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function toggleTheme() {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", body.dataset.theme);
}

themeToggle.addEventListener("click", toggleTheme);

// Check saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.dataset.theme = savedTheme;
}
