const grid = document.getElementById('grid');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

// Cartas con valores emparejados (pueden ser imágenes también)
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cards = [...cardValues, ...cardValues]; // Duplicamos para formar parejas

let flippedCards = [];
let matchedCards = 0;
const totalPairs = cardValues.length;

// Función para barajar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicializar el juego
function initGame() {
    grid.innerHTML = ''; // Limpiar el grid
    message.style.display = 'none';
    restartBtn.style.display = 'none';
    flippedCards = [];
    matchedCards = 0;
    shuffle(cards); // Barajar cartas
    cards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value; // Almacenar el valor de la carta
        card.addEventListener('click', handleCardClick);
        grid.appendChild(card);
    });
}

// Manejar el clic en una carta
function handleCardClick(e) {
    const clickedCard = e.target;

    // Evitar que se clickee una carta ya volteada o emparejada
    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
        return;
    }

    // Mostrar el valor de la carta
    clickedCard.textContent = clickedCard.dataset.value;
    clickedCard.classList.add('flipped');

    flippedCards.push(clickedCard);

    // Si se han volteado dos cartas
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value) {
            // Coinciden
            card1.classList.add('matched');
            card2.classList.add('matched');
            flippedCards = [];
            matchedCards++;

            // Comprobar si se han encontrado todas las parejas
            if (matchedCards === totalPairs) {
                message.style.display = 'block';
                restartBtn.style.display = 'block';
            }
        } else {
            // No coinciden, voltearlas después de un pequeño delay
            setTimeout(() => {
                card1.textContent = '';
                card2.textContent = '';
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

// Reiniciar el juego
restartBtn.addEventListener('click', initGame);

// Iniciar el juego por primera vez
initGame();
  