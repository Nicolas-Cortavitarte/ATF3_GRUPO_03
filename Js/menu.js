document.addEventListener('DOMContentLoaded', function () {
  const menuToggleButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('nav');
  const navigationLinks = document.querySelectorAll('nav a');

  // Toggle navigation menu open/close
  if (menuToggleButton) {
    menuToggleButton.addEventListener('click', function () {
      navigation.classList.toggle('nav-open');
      menuToggleButton.classList.toggle('active');

      const isExpanded = navigation.classList.contains('nav-open');
      menuToggleButton.setAttribute('aria-expanded', isExpanded);
      document.body.classList.toggle('menu-open', isExpanded);
    });
  }

  // Close menu when a navigation link is clicked on small screens
  navigationLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu if clicking outside the nav or toggle on small screens
  document.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = navigation.contains(event.target);
      const isClickOnToggle = menuToggleButton.contains(event.target);
      if (!isClickInsideNav && !isClickOnToggle && navigation.classList.contains('nav-open')) {
        closeMenu();
      }
    }
  });

  // Close menu on Escape key press for accessibility
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navigation.classList.contains('nav-open')) {
      closeMenu();
      menuToggleButton.focus();
    }
  });

  // Debounced resize event to reset menu state on larger screens
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    }, 150);
  });

  // Helper function to close the menu and update attributes/classes
  function closeMenu() {
    navigation.classList.remove('nav-open');
    menuToggleButton.classList.remove('active');
    menuToggleButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
});
