// js
function signUpBtn() {
    const name = document.getElementById('FullName').value;
    const nameerror = document.getElementById('FullName-error');
    const user = document.getElementById('UserName').value;
    const usererror = document.getElementById('UserName-error');
    const pass = document.getElementById('Password-input').value;
    const passerror = document.getElementById('Password-error');

    nameerror.innerText = "";
    usererror.innerText = "";
    passerror.innerText = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        console.log("Hello");
        nameerror.innerText =
            "Please enter your name properly.";
        isValid = false;
    }

    if (user === "" || user.length < 6) {
        usererror.innerText =
            "Please enter your username with at least 6 characters.";
        isValid = false;
    }

    if (pass === "" || pass.length < 8) {
        passerror.innerText =
            "Please enter a password with at least 8 characters.";
        isValid = false;
    }

    if (isValid == false) {
        return;
    }
}