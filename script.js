let menuButton = document.getElementById("menu");
menuButton.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("links").classList.toggle("active");
  document.getElementById("text").classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".menu")) {
    var dropdowns = document.getElementsByClassName("links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};
