const cards = document.querySelectorAll(".cards");
const scoreBoard = document.getElementById("scoreboard");

const baseImages = [
    "assets/gmail-logo.png",
    "assets/html_icon.png",
    "assets/linkedin-logo.png",
    "assets/youtube.png",
    "assets/nature.png",
    "assets/paper-present.png",
    "assets/project-expo.png",
    "assets/coding.png"
];

// Duplicate images
let memory = [...baseImages, ...baseImages];

// Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(memory);

let firstCard = null;
let secondCard = null;
let firstIndex = null;
let secondIndex = null;
let lockBoard = false;
let score = 0;

// Store whether a card has already been matched
const matched = new Array(cards.length).fill(false);
function showImage(card, index) {
    const cardFront = card.querySelector(".card-front");

    cardFront.style.backgroundImage = `url("${memory[index]}")`;
    card.style.transform = "rotateY(180deg)";
}

function hideImage(card) {
    const cardFront = card.querySelector(".card-front");

    card.style.transform = "rotateY(0deg)";
}
cards.forEach((card, index) => {
    card.addEventListener("click", () => {

        if (lockBoard) return;
        if (matched[index]) return;
        if (card === firstCard) return;

        showImage(card, index);

        if (firstCard === null) {
            firstCard = card;
            firstIndex = index;
        } else {
            secondCard = card;
            secondIndex = index;
            checkMatch();
        }

    });
});
function checkMatch() {

    if (memory[firstIndex] === memory[secondIndex]) {

        matched[firstIndex] = true;
        matched[secondIndex] = true;

        score++;
        scoreBoard.textContent = `Score: ${score}`;

        if (score === baseImages.length) {
            setTimeout(() => {
                alert(`🎉 Congratulations!\nYou matched all the cards!\nFinal Score: ${score}`);
            }, 1000);
        }

        resetTurn();

    } else {

        lockBoard = true;

        setTimeout(() => {
            hideImage(firstCard);
            hideImage(secondCard);
            resetTurn();
        }, 1000);

    }
}
function resetTurn() {
    firstCard = null;
    secondCard = null;
    firstIndex = null;
    secondIndex = null;
    lockBoard = false;
}