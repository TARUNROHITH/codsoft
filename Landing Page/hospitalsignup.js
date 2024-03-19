function validate() {
    var uname = document.getElementById("uname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var dob = document.getElementById("dob");

    if (uname.value.trim() == "") {
        alert("Blank Username");
        uname.style.border = "3px solid red";
        return false;

    }
    
    else if (uname.value.trim().length < 8) {
        alert("Username should be at least 8 characters long");
        uname.style.border = "3px solid red";
        return false;
    }
    
    
    else if (!/^[A-Z][a-z]*$/.test(uname.value.trim())) {
        alert("Name should start with a capital letter");
        uname.style.border = "3px solid red";
        return false;
    }

    if (email.value.trim() == "") {
        alert("Blank Email");
        email.style.border = "3px solid red";
        return false;
    } 
    else if (!validateEmail(email.value.trim())) {
        alert("Invalid Email");
        email.style.border = "3px solid red";
        return false;
    }

    if (phone.value.trim() == "") {
        alert("Blank Phone Number");
        phone.style.border = "3px solid red";
        return false;
    } else if (!/^\+\d{1,3}\d{5,}$/g.test(phone.value.trim())) {
        alert("Invalid Phone Number. Please include the country code starting with a '+' sign.");
        phone.style.border = "3px solid red";
        return false;
    }

    if (dob.value.trim() == "") {
        alert("Blank Date of Birth");
        dob.style.border = "3px solid red";
        return false;
    } else if (!validateDOB(dob.value.trim())) {
        alert("Invalid Date of Birth. Use the format DD/MM/YYYY");
        dob.style.border = "3px solid red";
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

function validateEmail(email) {
    var allowedDomains = /^(gmail\.com|hotmail\.com|yahoo\.com)$/i;
    var match = email.match(/\S+@(\S+)\.\S+/);
    return match && allowedDomains.test(match[1]);
}

function validateDOB(dob) {
    var dobFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    return dob.match(dobFormat);
}

function validatePassword(password) {
    // At least one uppercase, one lowercase, one special character, and one number
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    return passwordRegex.test(password);
}