function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        document.getElementById("message").innerHTML = "All fields are required!";
        return;
    }

    if (email === "test@example.com" && pass === "12345") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Login Successful!";
    } else {
        document.getElementById("message").innerHTML = "Invalid email or password!";
    }
}
