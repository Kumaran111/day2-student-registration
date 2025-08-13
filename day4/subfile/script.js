const createCardBtn = document.getElementById('createCardBtn');
const cardContainer = document.getElementById('cardContainer');
const cardCountDisplay = document.getElementById('cardCount');

let cardNumber = 0;

// Function to generate random background color
function getRandomColor() {
    const colors = ['#FF6B6B', '#4ECDC4', '#556270', '#C7F464', '#FFB347', '#8E44AD', '#2980B9', '#27AE60'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to update card count
function updateCardCount() {
    cardCountDisplay.textContent = cardContainer.children.length;
}

createCardBtn.addEventListener('click', () => {
    cardNumber++;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.background = getRandomColor();

    card.innerHTML = `
        <h3>Card ${cardNumber}</h3>
        <p>This is a dynamically created card.</p>
        <button class="delete-btn">Delete</button>
    `;

    // Delete functionality with animation
    card.querySelector('.delete-btn').addEventListener('click', () => {
        card.classList.add('fade-out');
        setTimeout(() => {
            card.remove();
            updateCardCount();
        }, 400);
    });

    cardContainer.appendChild(card);
    updateCardCount();
});
