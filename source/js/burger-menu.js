const burgerButton = document.querySelector('.main-nav_burger-button');
const navigationList = document.querySelector('.main-nav_list');

burgerButton.addEventListener('click', (event) => {
  burgerButton.classList.toggle('menu-open');
  navigationList.classList.toggle('main-nav_list--open');
});
