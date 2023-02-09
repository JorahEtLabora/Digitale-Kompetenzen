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
$(document).ready(function() {
  $('#navbarTogglerButton').onclick(function() {
    $('#navbarSupportedContent').slideToggle(300, "linear");
  });
});