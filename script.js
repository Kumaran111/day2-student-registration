document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let title = document.getElementById("title").value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !department || !year || !title) {
        alert("All fields must be filled.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show popup
    let popup = document.getElementById("successPopup");
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    document.getElementById("registrationForm").reset();
});
