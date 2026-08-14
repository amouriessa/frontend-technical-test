window.dataLayer = window.dataLayer || [];

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    window.dataLayer.push({
      event: "hero_navigation_click",
      link_name: link.dataset.track,
    });
  });
});
