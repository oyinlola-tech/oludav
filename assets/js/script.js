// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Navbar Toggle (for smaller screens)
const nav = document.querySelector('.nav-links');
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
document.querySelector('.navbar').appendChild(navToggle);

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Contact Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simple Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If you want to actually send emails, integrate EmailJS or backend here
  alert('Thank you, your message has been submitted!');
  form.reset();
});