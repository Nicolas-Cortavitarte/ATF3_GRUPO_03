document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      menuToggle.classList.toggle('active');

      const isExpanded = nav.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      document.body.classList.toggle('menu-open', isExpanded);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        nav.classList.remove('nav-open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('nav-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });
});
