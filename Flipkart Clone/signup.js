// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form[type="login-from"]');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get the input field values
      var phoneNumber = document.getElementById('phone').value;
      var email = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      
      // Regular expressions for validation
      var phoneRegex = /^\d{10}$/;
      var emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
      
      // Validate phone number
      if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid phone number with a minimum of 10 digits.");
        return false;
      }
      
      // Validate email
      else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address in lowercase ending with '@gmail.com'.");
        return false;
      }
      
      // Validate password
      else if (password.length < 8 || !passwordRegex.test(password)) {
        alert("Please enter a valid password. It should be at least 8 characters long, including uppercase, lowercase letters, numbers, and special characters.");
        return false;
      } else {
        window.location.href = "login.html";
      }
    });
  });