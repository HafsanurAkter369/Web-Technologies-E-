let wrongCount = 0;
 
document.getElementById("loginForm").addEventListener("submit", function(event) {
 
    event.preventDefault();
 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
 
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let attemptCount = document.getElementById("attemptCount");
 
    let isValid = true;
 
    // Clear previous error messages
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
 
    // Email validation
    if (!email.includes("@")) {
        emailError.innerHTML = "Email must contain @";
        isValid = false;
    }
 
    // Password validation
    if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }
    else if (!password.includes("#")) {
        passwordError.innerHTML = "Password must contain #";
        isValid = false;
    }
 
    // If form is invalid
    if (!isValid) {
        wrongCount++;
        attemptCount.innerHTML = "Wrong Submission Count: " + wrongCount;
    }
    else {
        alert("Login Successful!");
        wrongCount = 0;
        attemptCount.innerHTML = "";
    }
 
});