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
  let navbarCollapse = document.getElementById("navbarSupportedContent");
  if (navbarCollapse.classList.contains("collapse")) {
    navbarCollapse.classList.remove("collapse");
  } else {
    navbarCollapse.classList.add("collapse");
  }
});