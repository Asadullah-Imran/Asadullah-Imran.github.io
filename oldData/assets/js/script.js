"use strict";

/**
 * element toggle function (updated for multiple elements)
 */
const elemToggleFunc = function (...elems) {
  elems.forEach((elem) => elem.classList.toggle("active"));
};

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  if (Math.abs(scrollTop - lastScrollTop) > 10) {
    // Trigger only after 10px scroll
    lastScrollTop = scrollTop;
    if (scrollTop >= 10) {
      header.classList.add("active");
      goTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      goTopBtn.classList.remove("active");
    }
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

// Add ARIA label for accessibility
navToggleBtn.setAttribute("aria-label", "Toggle Navigation");
navbar.setAttribute("aria-hidden", "true"); // To indicate navbar is hidden initially

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn, navbar, document.body);

  // Toggle aria-expanded to indicate the state of the navbar
  const isExpanded = navbar.classList.contains("active");
  navbar.setAttribute("aria-hidden", !isExpanded);
});

/**
 * skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox, skillsBox);
    toggleBtns.forEach((toggleBtn) => elemToggleFunc(toggleBtn));
  });
});

/**
 * dark & light theme toggle (modularized)
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

// Add ARIA label for accessibility
themeToggleBtn.setAttribute("aria-label", "Toggle Theme");

const toggleTheme = function () {
  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
};

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);
  toggleTheme(); // Reuse the function
});

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
