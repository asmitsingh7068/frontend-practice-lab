// ===============================
// Selecting Elements
// ===============================

const openBtn = document.getElementById("openModal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

const cancelBtn = document.querySelector(".cancel");
const continueBtn = document.querySelector(".continue");

// ===============================
// Functions
// ===============================

function openModal() {
    overlay.classList.remove("hidden");
}

function closeModal() {
    overlay.classList.add("hidden");
}

// ===============================
// Open Modal
// ===============================

openBtn.addEventListener("click", openModal);

// ===============================
// Close Button
// ===============================

closeBtn.addEventListener("click", closeModal);

// ===============================
// Cancel Button
// ===============================

cancelBtn.addEventListener("click", function () {

    alert("Operation Cancelled!");

    closeModal();

});

// ===============================
// Continue Button
// ===============================

continueBtn.addEventListener("click", function () {

    alert("Welcome! Let's Continue 🚀");

    closeModal();

});

// ===============================
// Click Outside
// ===============================

overlay.addEventListener("click", function (event) {

    if (event.target === overlay) {
        closeModal();
    }

});

// ===============================
// ESC Key
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});