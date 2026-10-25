// QNONCE Website Interactions

document.addEventListener("DOMContentLoaded", function () {
  setupHeaderScroll();
  setupMobileMenu();
  setupRevealAnimations();
  setupProductVerificationDemo();
  setupContactForm();
});


/* Header background changes after scrolling */
function setupHeaderScroll() {
  const header = document.getElementById("siteHeader");

  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}


/* Mobile menu open and close */
function setupMobileMenu() {
  const menuButton = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("siteNav");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("show");
    updateMenuIcon(menuButton, isOpen);
  });

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
      updateMenuIcon(menuButton, false);
    });
  });

  document.addEventListener("click", function (event) {
    const clickedInsideNav = nav.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideNav && !clickedMenuButton) {
      nav.classList.remove("show");
      updateMenuIcon(menuButton, false);
    }
  });
}


function updateMenuIcon(button, isOpen) {
  const icon = button.querySelector("i");

  if (!icon) return;

  if (isOpen) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
}


/* Smooth reveal animation on scroll */
function setupRevealAnimations() {
 const items = document.querySelectorAll(
  ".hero-badge, .home-hero-content h1, .home-hero-content p, .hero-actions, .hero-proof-row, .home-hero-visual, .identity-item, .intro-content, .mini-card, .section-heading, .industry-preview-card, .process-left, .process-step, .home-cta-box, .inner-hero-content, .inner-visual-card, .capability-card, .dark-info-grid, .value-item, .proof-card, .flow-mini-list div, .detailed-step, .experience-card, .sector-focus-grid div, .full-industry-card, .sector-risk-card, .verify-phone-mockup, .verify-tool-content, .verify-tool-card, .status-card, .trust-check-list div, .about-visual-card, .about-story-content, .about-story-card, .mission-card, .principle-card, .contact-visual-card, .contact-info, .contact-info-item, .contact-form-card, .trust-journey-board, .journey-node, .trust-ticker-section"
);

  if (!items.length) return;

  items.forEach(function (item) {
    item.classList.add("reveal-item");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
}


/* Demo verification result for public verify page */
function setupProductVerificationDemo() {
  const form = document.getElementById("productVerifyForm");
  const input = document.getElementById("verificationId");
  const resultBox = document.getElementById("verificationResultBox");
  const resultTitle = document.getElementById("verificationResultTitle");
  const resultText = document.getElementById("verificationResultText");

  if (!form || !input || !resultBox || !resultTitle || !resultText) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = input.value.trim().toUpperCase();

    resultBox.classList.remove("success", "warning");

    if (!value) {
      resultBox.classList.add("warning");
      resultTitle.textContent = "Verification ID Required";
      resultText.textContent = "Please enter a QR or product verification ID to continue.";
      return;
    }

    if (value === "QN-2048-AUTH" || value === "QR-QNONCE-001") {
      resultBox.classList.add("success");
      resultTitle.textContent = "Authentic Product";
      resultText.textContent = "This product identity appears valid and matched with a secure QNONCE record.";
      return;
    }

    resultBox.classList.add("warning");
    resultTitle.textContent = "Product Not Found";
    resultText.textContent = "This ID is not available in the current verification records. Please check the code and try again.";
  });
}


/* Contact form demo success message */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("contactSuccessMessage");

  if (!form || !successMessage) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.classList.add("show");
    form.reset();
  });
}