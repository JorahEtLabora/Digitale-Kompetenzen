// Animation Dropdown-Menü
$(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
      $('.dropdown-menu').slideToggle(300, "linear");
    });
    
    $('.dropdown-menu').mouseleave(function() {
      $(this).slideToggle(300, "linear");
    });
  });

// Button für Navigationsleiste in mobiler Ansicht
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  const target = document.querySelector('#navbarSupportedContent');
  const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !isExpanded);
  target.classList.toggle('show');
});