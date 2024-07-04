function showMessage() {
    alert("Hello from JavaScript!");
  }
  
  // Add event listener to the button
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("click-me");
    button.addEventListener("click", showMessage);
  });
  