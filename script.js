function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form form');
  const dialogBox = document.getElementById('dialog-box');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    dialogBox.classList.add('show');
    setTimeout(function() {
      dialogBox.classList.remove('show');
    }, 3000);
    contactForm.reset();
  });
});