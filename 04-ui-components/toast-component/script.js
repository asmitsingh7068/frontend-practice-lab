// =============================
// Selecting Elements
// =============================

const toastContainer = document.getElementById("toast-container");

const successBtn = document.querySelector(".success-btn");
const errorBtn = document.querySelector(".error-btn");
const warningBtn = document.querySelector(".warning-btn");
const infoBtn = document.querySelector(".info-btn");

// =============================
// Toast Function
// =============================

function showToast(title, message, type, icon) {

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = `
    
        <div class="toast-icon">
            ${icon}
        </div>

        <div class="toast-content">

            <div class="toast-title">
                ${title}
            </div>

            <div class="toast-message">
                ${message}
            </div>

        </div>

        <button class="toast-close">
            ✖
        </button>

        <div class="progress"></div>

    `;

    // Add Toast

    toastContainer.appendChild(toast);

    // Auto Remove After 4 Seconds

    setTimeout(() => {

        toast.remove();

    }, 4000);

    // Manual Close

    toast.querySelector(".toast-close").addEventListener("click", () => {

        toast.remove();

    });

}

// =============================
// Success
// =============================

successBtn.addEventListener("click", () => {

    showToast(
        "Success",
        "Profile updated successfully.",
        "success",
        "✅"
    );

});

// =============================
// Error
// =============================

errorBtn.addEventListener("click", () => {

    showToast(
        "Error",
        "Something went wrong.",
        "error",
        "❌"
    );

});

// =============================
// Warning
// =============================

warningBtn.addEventListener("click", () => {

    showToast(
        "Warning",
        "Storage is almost full.",
        "warning",
        "⚠️"
    );

});

// =============================
// Info
// =============================

infoBtn.addEventListener("click", () => {

    showToast(
        "Information",
        "New update is available.",
        "info",
        "ℹ️"
    );

});