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

