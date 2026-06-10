document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const menuIcon = menuToggle.querySelector("i");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");

      if (mainNav.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
      } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
    });
  }

  const scrollTracks = document.querySelectorAll(
    ".partners-logo-grid,.services-grid,.industries-track",
  );

  scrollTracks.forEach((track) => {
    let isPaused = false;
    let scrollSpeed = 0.5;

    track.addEventListener("mouseenter", () => (isPaused = true));
    track.addEventListener("mouseleave", () => (isPaused = false));
    track.addEventListener("touchstart", () => (isPaused = true));
    track.addEventListener("touchend", () => (isPaused = false));

    const autoScroll = () => {
      if (!isPaused) {
        track.scrollLeft += scrollSpeed;
      }

      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
        track.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  });
});
