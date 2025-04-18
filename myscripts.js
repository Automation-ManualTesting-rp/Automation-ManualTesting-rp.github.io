// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = contactForm.querySelector('input[name="name"]');
const emailInput = contactForm.querySelector('input[name="email"]');
const messageInput = contactForm.querySelector('textarea[name="message"]');

// Adding event listener to validate on submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting immediately

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Please enter your message.");
    return;
  }

  // If all fields are valid, show success message (can be replaced with form submission)
  alert("Thank you for your message! I'll get back to you soon.");
  contactForm.reset();
});

// Simple email validation function
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Dark/Light Theme Toggle
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = "Toggle Theme";
themeToggleBtn.classList.add('theme-toggle-btn');
document.body.appendChild(themeToggleBtn);

// Check the current theme and toggle
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Apply dark theme styles (in your CSS file)
const darkThemeStyles = `
  body.dark-theme {
    background-color: #333;
    color: #fff;
  }

  body.dark-theme header {
    background-color: #222;
  }

  body.dark-theme .cta-button {
    background-color: #c0392b;
  }

  body.dark-theme footer {
    background-color: #222;
  }

  body.dark-theme .projects, body.dark-theme .notes-courses {
    background-color: #2c3e50;
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = darkThemeStyles;
document.head.appendChild(styleTag);
