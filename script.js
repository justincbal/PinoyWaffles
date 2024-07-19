// MOBILE NAVIGATION OPEN / CLOSE
const mobileMenu = document.querySelector('.mobile');
const hamburger = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open-menu');
})

close.addEventListener('click', () => {
  mobileMenu.classList.remove('open-menu');
})
