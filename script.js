// Welcome alert when page loads
window.addEventListener("load", () => {
    alert("Welcome! Please fill out the Project Registration form.");
});

// Function to highlight fields
function highlightField(field, isError) {
    field.style.borderColor = isError ? "var(--error-color)" : "#ccc";
}

// Form validation and submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let department = document.getElementById("department");
    let year = document.getElementById("year");
    let title = document.getElementById("title");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let isValid = true;

    // Reset all borders
    [name, email, department, year, title].forEach(field => highlightField(field, false));

    // Check for empty fields
    [name, email, department, year, title].forEach(field => {
        if (!field.value.trim()) {
            highlightField(field, true);
            isValid = false;
        }
    });

    // Email validation
    if (email.value && !emailPattern.test(email.value.trim())) {
        highlightField(email, true);
        isValid = false;
    }

    if (!isValid) return;

    // Show success popup
    let popup = document.getElementById("successPopup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    document.getElementById("registrationForm").reset();
});

// "Click Me" button changes section content
document.getElementById("changeSection").addEventListener("click", () => {
    let section = document.getElementById("infoSection");
    section.textContent = "You clicked the button! 🎯";
    section.style.backgroundColor = "#ffeaa7";
});
