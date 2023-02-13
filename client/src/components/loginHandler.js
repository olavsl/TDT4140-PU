// const username = prompt("Enter your username: ");
// const password = prompt("Enter your password: ");

const validUsername = "Iver";
const validPassword = "Iver";

function login() {
    const username = document.getElementById("usernameInput");
    const password = document.getElementById("passwordInput");

    if (username === validUsername && password === validPassword) {
        console.log("Login successful!");
    } else {
        console.log("Login nt successful");
    }
}