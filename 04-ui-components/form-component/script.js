// ===============================
// Form Elements
// ===============================

const form = document.querySelector(".registration-form");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const country = document.getElementById("country");
const address = document.getElementById("address");
const terms = document.getElementById("terms");

const toggleButtons = document.querySelectorAll(".toggle-password");

// ===============================
// Password Show / Hide
// ===============================

toggleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const input = button.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";
            button.textContent = "🙈";

        } else {

            input.type = "password";
            button.textContent = "👁";

        }

    });

});

// ===============================
// Error Functions
// ===============================

function showError(input, message) {

    const formGroup = input.closest(".form-group");
    const error = formGroup.querySelector(".error");

    error.textContent = message;

    input.style.border = "2px solid red";

}

function showSuccess(input) {

    const formGroup = input.closest(".form-group");
    const error = formGroup.querySelector(".error");

    error.textContent = "";

    input.style.border = "2px solid #22c55e";

}

// ===============================
// Validation
// ===============================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    // Full Name

    if (fullName.value.trim() === "") {

        showError(fullName, "Full Name is required");
        isValid = false;

    } else {

        showSuccess(fullName);

    }

    // Email

    if (email.value.trim() === "") {

        showError(email, "Email is required");
        isValid = false;

    } else {

        showSuccess(email);

    }

    // Password

    if (password.value.trim() === "") {

        showError(password, "Password is required");
        isValid = false;

    } else {

        showSuccess(password);

    }

    // Confirm Password

    if (confirmPassword.value.trim() === "") {

        showError(confirmPassword, "Confirm Password is required");
        isValid = false;

    } else if (password.value !== confirmPassword.value) {

        showError(confirmPassword, "Passwords do not match");
        isValid = false;

    } else {

        showSuccess(confirmPassword);

    }

    // Phone

    if (phone.value.trim() === "") {

        showError(phone, "Phone Number is required");
        isValid = false;

    } else {

        showSuccess(phone);

    }

    // Date of Birth

    if (dob.value === "") {

        showError(dob, "Select your Date of Birth");
        isValid = false;

    } else {

        showSuccess(dob);

    }

    // Country

    if (country.value === "") {

        showError(country, "Select your Country");
        isValid = false;

    } else {

        showSuccess(country);

    }

    // Address

    if (address.value.trim() === "") {

        showError(address, "Address is required");
        isValid = false;

    } else {

        showSuccess(address);

    }

    // Gender

    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {

        alert("Please select your gender.");
        isValid = false;

    }

    // Terms

    if (!terms.checked) {

        alert("Please accept Terms & Conditions.");
        isValid = false;

    }

    // Success

    if (isValid) {

        alert("🎉 Registration Successful in asmit company !");

        form.reset();

        document
            .querySelectorAll(".error")
            .forEach(error => error.textContent = "");

        document
            .querySelectorAll("input, textarea, select")
            .forEach(input => input.style.border = "");

    }

});