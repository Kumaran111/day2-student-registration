const addProfileBtn = document.getElementById("addProfileBtn");
const profileContainer = document.getElementById("profileContainer");

function createProfileCard(name, role, container) {
    const card = document.createElement("div");
    card.className = "profile-card";

    const nameEl = document.createElement("h3");
    nameEl.textContent = name;

    const roleEl = document.createElement("p");
    roleEl.textContent = role;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => card.remove();

    card.appendChild(nameEl);
    card.appendChild(roleEl);
    card.appendChild(removeBtn);
    container.appendChild(card);
}

addProfileBtn.addEventListener("click", () => {
    const name = prompt("Enter name:");
    if (!name) return;

    const role = prompt("Enter role:");
    if (!role) return;

    createProfileCard(name, role, profileContainer);
});
