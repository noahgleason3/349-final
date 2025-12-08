const logoBtn = document.getElementById("logoBtn");
const menuOverlay = document.getElementById("menuOverlay");
const sidebar = document.querySelector(".sidebar");


logoBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuOverlay.classList.toggle("active");
});

sidebar.addEventListener("mouseenter", () => {
  menuOverlay.classList.add("active");
});


sidebar.addEventListener("mouseleave", () => {
  menuOverlay.classList.remove("active");
});