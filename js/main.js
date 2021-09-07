
var loginMailInput = document.getElementById("loginMailInput");
var loginPasswordInput = document.getElementById("loginPasswordInput");
var loginBtn = document.getElementById("loginBtn");
var loginAlert = document.getElementById("loginAlert");


var users =[];
if(localStorage.getItem("usersList") != null) {
    users = JSON.parse(localStorage.getItem("usersList"));
}

// Check if user already has an account then login
loginBtn.onclick = function login() {
        if (localStorage.getItem("usersList") != null) {
        for (var i =0; i < users.length; i++) {
            if(loginMailInput.value == users[i].email && loginPasswordInput.value ==  users[i].password) {
                loginAlert.classList.add("d-none");
                localStorage.setItem("currentUser", users[i].name);
                // navigate to home page
                window.location.href = "successfulLogin.html";
                // exit once a matching occurs
                return;
            }
            else {
                loginAlert.classList.remove("d-none");
            }
        }
    } else {
        loginAlert.classList.remove("d-none");
    }
}
