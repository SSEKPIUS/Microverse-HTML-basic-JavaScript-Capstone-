/* eslint-disable no-unused-vars */

function toggleMobileMenu() {
  document.querySelector('.humberger').classList.toggle('d-none');
  document.querySelector('.humberger-close').classList.toggle('d-flex');
  document.querySelector('.top-nav ul').classList.toggle('d-flex');
  document.querySelector('.top-nav').classList.toggle('VH100');
}

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.humberger').addEventListener('click', (e) => {
    toggleMobileMenu();
  });
  document.querySelector('.humberger-close').addEventListener('click', (e) => {
    toggleMobileMenu();
  });
});
