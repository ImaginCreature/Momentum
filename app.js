/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir("Hello, ", loginInput.value);
    //console.log("click!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);