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
document.getElementById("navbarTogglerButton").addEventListener("click", function() {
  var navbarSupportedContent = document.getElementById("navbarSupportedContent");
  if (navbarSupportedContent.classList.contains("show")) {
    navbarSupportedContent.classList.remove("show");
  } else {
    navbarSupportedContent.classList.add("show");
  }
});