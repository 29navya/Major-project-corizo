document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            // Simple validation (Replace with backend authentication)
            if (username === "Navya" && password === "Navya@123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Invalid username or password");
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("register-username").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            // Simple validation
            if (username && email && password) {
                alert(`Registration successful! Welcome, ${username}.`);
                window.location.href = "Login.html"; // Redirect to login
            } else {
                alert("Please fill all fields");
            }
        });
    }
});
