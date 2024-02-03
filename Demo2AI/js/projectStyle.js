
document.addEventListener("DOMContentLoaded", function() {
   
    var imgThumbnail = document.getElementById("clickableImage");
    var overlay = document.getElementById("fullImageOverlay");
  
 
    imgThumbnail.addEventListener("click", function() {
      overlay.style.display = "block";
    });
  
    // Optional: Hide the overlay when it is clicked
    overlay.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
  