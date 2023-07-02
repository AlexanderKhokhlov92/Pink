window.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const navigationLinks = document.querySelectorAll('.main-nav_link');
  const navigationItems = document.querySelectorAll('.main-nav_list-item');
  console.log(currentPage);
  console.log(navigationItems);

  for (let i = 0; i < navigationLinks.length; i++) {
    const link = navigationLinks[i];
    console.log(link);
    if (link.getAttribute('href') == '#') {
      link.classList.add('active-link');
      link.parentNode.classList.add('active-item');
      link.addEventListener('click', function (event) {
        event.preventDefault();
      });
    } else {
      link.classList.remove('active-link');
      link.parentNode.classList.remove('active-item');
    }
  }
});
