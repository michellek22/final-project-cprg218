document.addEventListener("DOMContentLoaded", () => {

    
  // Accordion Functionality
  document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });


  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});