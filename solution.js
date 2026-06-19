/**
 * DOMAIN PLUS - Interactive UI Module Scripts
 * Handles mobile interaction events natively
 */
document.addEventListener("DOMContentLoaded", () => {
  // Select element nodes from layout
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    // Handle trigger click event
    menuBtn.addEventListener("click", () => {
      // Toggle visibility classes natively
      mobileMenu.classList.toggle("hidden");

      const icon = menuBtn.querySelector("i");

      // Toggle hamburger icon appearance
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.replace("fa-xmark", "fa-bars");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        icon.classList.replace("fa-bars", "fa-xmark");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });
  }
});
