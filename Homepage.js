

// Hamburger menu toggle
 const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("primary-navigation");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("active");
  });

const segments = document.querySelectorAll('.segment');
const texts = document.querySelectorAll('.about-text');

function clearHighlights() {
  segments.forEach(s => s.classList.remove('hovered'));
  texts.forEach(t => t.classList.remove('highlight'));
}

// Hover effects (for desktop)
segments.forEach(segment => {
  const id = segment.dataset.segment;

  segment.addEventListener('mouseenter', () => {
    const text = document.querySelector(`.about-text[data-segment="${id}"]`);
    segment.classList.add('hovered');
    if (text) text.classList.add('highlight');
  });

  segment.addEventListener('mouseleave', () => {
    const text = document.querySelector(`.about-text[data-segment="${id}"]`);
    segment.classList.remove('hovered');
    if (text) text.classList.remove('highlight');
  });

  // Tap/Click (for mobile)
  segment.addEventListener('click', () => {
    clearHighlights();
    const text = document.querySelector(`.about-text[data-segment="${id}"]`);
    segment.classList.add('hovered');
    if (text) text.classList.add('highlight');
  });
});

texts.forEach(text => {
  const id = text.dataset.segment;

  text.addEventListener('mouseenter', () => {
    const segment = document.querySelector(`.segment[data-segment="${id}"]`);
    text.classList.add('highlight');
    if (segment) segment.classList.add('hovered');
  });

  text.addEventListener('mouseleave', () => {
    const segment = document.querySelector(`.segment[data-segment="${id}"]`);
    text.classList.remove('highlight');
    if (segment) segment.classList.remove('hovered');
  });

  // Tap/Click (for mobile)
  text.addEventListener('click', () => {
    clearHighlights();
    const segment = document.querySelector(`.segment[data-segment="${id}"]`);
    text.classList.add('highlight');
    if (segment) segment.classList.add('hovered');
  });
});

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter-form-horizontal');
    const message = document.querySelector('.form-message');

    if (form && message) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent actual form submission

        // Show thank-you message
        message.style.display = 'block';
        message.textContent = 'Thanks for subscribing!';

        // Reset form fields
        form.reset();
      });
    }
  });

