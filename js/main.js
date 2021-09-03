
// declaring variables for manipulation
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var signupBtn = document.getElementById("signupBtn");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
var successAlert = document.getElementById("successAlert");
var loginMailInput = document.getElementById("loginMailInput");
var loginPasswordInput = document.getElementById("loginPasswordInput");
var loginBtn = document.getElementById("loginBtn");
var loginAlert = document.getElementById("loginAlert");
var userName = document.getElementById("userName");
var inputs = document.getElementsByTagName("input");    
var users = [];     


if(localStorage.getItem("usersList") != null) {
    users = JSON.parse(localStorage.getItem("usersList"));
} 

function addData() {
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    users.push(user);
    localStorage.setItem("usersList", JSON.stringify(users));
}


//  sign-up after email validation
signupBtn.addEventListener("click", function() {
    if (nameInput.classList.contains("is-valid") && emailInput.classList.contains("is-valid") && passwordInput.classList.contains("is-valid")) {
        if(CheckRepeatedMail() == false) {
            emailAlert.innerHTML = "This email is used, try another one.";
            emailAlert.classList.remove("d-none");
        } else {
            addData();
            clearInputs();
            // remove alert once email is verified
            emailAlert.classList.add("d-none");
        }
    } else {
        nameAlert.classList.remove("d-none");
        emailAlert.classList.remove("d-none");
        passwordAlert.classList.remove("d-none");
        successAlert.classList.add("d-none");
    }
});   

//  check if email is repeated
function CheckRepeatedMail() {
        for (var i =0; i < users.length; i++) {
            if(emailInput.value == users[i].email) {
                return false;
            } else {
                console.log(emailInput.value);
                return true;
            }
        }
}


function clearInputs(){
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        // remove "is-valid" mark after successful submission
        inputs[i].classList.remove("is-valid");
    }
    // show success-alert after signing-up
    successAlert.classList.remove("d-none");
}

//  validate user name
nameInput.onkeyup = function checkName() {
    //  remove success-alert to start creating another email
    successAlert.classList.add("d-none");
    var nameChecker = /^[A-Za-z_]{3,20}$/gm;
    if(nameChecker.test(nameInput.value)) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");
        return true;
    } else {
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        nameAlert.classList.remove("d-none");
        return false;
    }
}

//  validate user email 
emailInput.onkeyup = function checkMail() {
    successAlert.classList.add("d-none");
    var emailchecker = /^[a-z0-9._]+@[A-Za-z0-9]+[.][A-Za-z]{2,20}$/gm;
    if(emailchecker.test(emailInput.value)) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailAlert.classList.add("d-none");
        return true;
    } else {
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailAlert.classList.remove("d-none");
        return false;
    }
}

//  validate user password
passwordInput.onkeyup = function checkPassword() {
    successAlert.classList.add("d-none");
    var passChecker = /^[A-Z0-9a-z._@]{6,20}$/gm;
    if(passChecker.test(passwordInput.value)) {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordAlert.classList.add("d-none");
        return true;
    } else {
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordAlert.classList.remove("d-none");
        return false;
    }
}

// Check if user already has an account then login
function login() {
    if (localStorage.getItem("usersList") != null) {
        for (var i =0; i < users.length; i++) {
            if(loginMailInput.value == users[i].email && loginPasswordInput.value ==  users[i].password) {
                loginAlert.classList.add("d-none");
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