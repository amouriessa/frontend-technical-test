document.addEventListener("DOMContentLoaded", () => {
  window.dataLayer = window.dataLayer || [];

  document.querySelectorAll("[data-track]").forEach((link) => {
    link.addEventListener("click", () => {
      window.dataLayer.push({
        event: "hero_navigation_click",
        link_name: link.dataset.track,
      });
    });
  });

  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menuClose = document.querySelector(".mobile-menu-close");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && menuClose && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("is-open");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  }
});
