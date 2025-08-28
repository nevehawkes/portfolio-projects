// heading banner fixed
const header = document.querySelector(".heading-banner");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { // after 100px scroll
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

//thank you message contact form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const message = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual form submission

      // Optionally, clear the form fields
      form.reset();

      // Show the thank you message
      message.style.display = 'block';

      // Optionally, hide the message after a few seconds
      setTimeout(() => {
        message.style.display = 'none';
      }, 5000); // hide after 5 seconds
    });
  }
});
