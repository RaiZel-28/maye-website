// Small JS helpers (optional). Keep lightweight and well-commented.

/* Insert current year in footer */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Optional: handle contact form submit (example: prevent actual send)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // For real projects: send with fetch() to server / Netlify Forms / Formspree
      alert('Thanks! Message simulated as sent. (Configure backend to send real messages.)');
      form.reset();
    });
  }
});