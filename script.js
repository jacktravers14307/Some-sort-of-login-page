function signup_info() {
    let email = document.getElementById("email-input");
    let username = document.getElementById("username-input");
    let password = document.getElementById("password-input");
    let password2 = document.getElementById("password-input2");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let inputs = [email, username, password, password2];
    inputs.forEach(input => {
        input.style.border = "";
    });

    if (!username.value || !password.value || !email.value || !password2.value) {
        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = "2px solid red";
            }
        });
    } else if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
    } else if (password.value !== password2.value) {
        password.style.border = "2px solid red";
        password2.style.border = "2px solid red";
    } else {
        console.log(`Username: ${username.value} \nEmail: ${email.value} \nPassword: ${password.value}`);
    }
}

// Real-time check for password match
function checkPasswordMatch() {
    let password = document.getElementById("password-input");
    let password2 = document.getElementById("password-input2");

    if (password.value !== password2.value) {
        password.style.border = "2px solid red";
        password2.style.border = "2px solid red";
    } else {
        password.style.border = "";
        password2.style.border = "";
    }
}

// Event listeners for password inputs
document.getElementById("password-input").addEventListener('input', checkPasswordMatch);
document.getElementById("password-input2").addEventListener('input', checkPasswordMatch);

function login_info() {
    let username = document.getElementById("username-input");
    let password = document.getElementById("password-input");

    let inputs = [username, password];
    inputs.forEach(input => {
        input.style.border = "";
    });

    if (!username.value || !password.value) {
        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = "2px solid red";
            }
        });
    } else {
        console.log(`Username: ${username.value} \nPassword: ${password.value}`);
    }
}
