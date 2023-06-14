document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation
    if (username === "admin" && password === "password") {
      alert("Login successful");
      window.location.href = "smartwatch.html";
      // You can redirect the user to another page here
    } else {
      alert("Invalid username or password");
    }
});