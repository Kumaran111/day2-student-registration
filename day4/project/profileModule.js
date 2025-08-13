export function createProfileCard(name, role, container) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="remove-btn">Remove</button>
    `;

    // Remove button functionality
    card.querySelector(".remove-btn").addEventListener("click", () => {
        card.remove();
    });

    container.appendChild(card);
}
