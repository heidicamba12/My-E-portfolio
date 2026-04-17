const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const themeToggle = document.getElementById('themeToggle');

navToggle.addEventListener('click', () => nav.classList.toggle('open'));

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀' : '☾';
});

document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
});
