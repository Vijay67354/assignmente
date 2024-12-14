 // Toggle Mobile Menu
 function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  const closeIcon = document.getElementById("close-nav");

  // Toggle the visibility of the close icon when the menu is open or closed
  if (nav.classList.contains("active")) {
    closeIcon.style.display = "block";
  } else {
    closeIcon.style.display = "none";
  }
}

// Close the nav menu when the close icon is clicked
document
  .getElementById("close-nav")
  .addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("active");
    this.style.display = "none"; // Hide the close icon
  });

// Toggle Dropdown Menu for Mobile (Service)
function toggleDropdown(event) {
  const dropdown = document.getElementById("service-dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
}

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("service-dropdown");
  const dropdownLink = document.querySelector('a[href="#"]'); // The Service link itself

  // If the click is outside the dropdown or the service link, hide the dropdown
  if (!dropdown.contains(e.target) && e.target !== dropdownLink) {
    dropdown.style.display = "none";
  }
});

// Stop the dropdown from closing if clicking inside the dropdown itself
document
  .getElementById("service-dropdown")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });