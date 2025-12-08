const logoBtn = document.getElementById("logoBtn");
const menuOverlay = document.getElementById("menuOverlay");
const sidebar = document.querySelector(".sidebar");

// Toggle menu when clicking logo
logoBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuOverlay.classList.toggle("active");
});

// Show menu on hover over sidebar
sidebar.addEventListener("mouseenter", () => {
  menuOverlay.classList.add("active");
});

// Hide menu when leaving sidebar
sidebar.addEventListener("mouseleave", () => {
  menuOverlay.classList.remove("active");
});