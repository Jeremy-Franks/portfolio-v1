const burgerMenu = document.querySelector('.burger-menu');
const navbarToggle = document.querySelector('.navbar');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('is-active');
  navbarToggle.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
