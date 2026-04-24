const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const faqItems = document.querySelectorAll(".faq-item");

const setMenuState = (open) => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
};

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isExpanded);
});

mobileMenuClose?.addEventListener("click", () => setMenuState(false));

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
