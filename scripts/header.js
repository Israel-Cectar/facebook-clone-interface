const headerIcons = document.querySelectorAll('.header-center-icon');

 headerIcons.forEach(icon => {
  icon.addEventListener('click', function () {

    // Remove class from ALL icons
    headerIcons.forEach( icon=> {
      icon.classList.remove('active');
    });

    // Add class to the clicked icon
    this.classList.add('active');
  });
});

// Set the home icon as active as page loads
const homeIcon = document.querySelector('.js-homepage-indicator').parentElement;
homeIcon.classList.add('active');

// toggle menu
const menuToggle = document.querySelector('.js-menu-layout-show');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('click', () => {
  searchBar.classList.add('value');
});