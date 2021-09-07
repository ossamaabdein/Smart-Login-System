
var userName = localStorage.getItem("currentUser");
var currentUser = document.getElementById("currentUser");

console.log(typeof userName)

currentUser.innerHTML = userName;