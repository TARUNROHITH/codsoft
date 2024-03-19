function validateSignIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value.trim() == "") {
        alert("Blank Email");
        email.style.border = "3px solid red";
        return false;
    } else if (!validateEmail(email.value.trim())) {
        alert("Invalid Email");
        email.style.border = "3px solid red";
        return false;
    }

    if (password.value.trim() == "") {
        alert("Blank Password");
        return false;
    } else if (!validatePassword(password.value.trim())) {
        alert("Invalid Password. It should contain at least one uppercase letter, one lowercase letter, one special character, and one number.");
        return false;
    }

    return true;
}

// Additional functions if needed
