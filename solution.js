// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".bi-list");
  const navTabs = document.querySelector(".Tabs");

  // Toggle menu on hamburger click
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburgerMenu.classList.toggle("active");
      navTabs.classList.toggle("active");
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".Tabs a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      navTabs.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      e.target !== hamburgerMenu &&
      e.target !== navTabs &&
      !navTabs.contains(e.target)
    ) {
      hamburgerMenu.classList.remove("active");
      navTabs.classList.remove("active");
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      hamburgerMenu.classList.remove("active");
      navTabs.classList.remove("active");
    }
  });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
