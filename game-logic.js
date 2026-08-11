const cards = document.querySelectorAll(".cards");
const scoreBoard = document.getElementById("scoreboard");
const timerBoard = document.getElementById("timer-board");

const baseImages = [
    "./assets/cat.svg",
    "./assets/dog.svg",
    "./assets/fox.svg",
    "./assets/panda.svg",
    "./assets/lion.svg",
    "./assets/frog.svg",
    "./assets/penguin.svg",
    "./assets/koala.svg"
];

// Preload images
baseImages.forEach((image) => {
    const img = new Image();
    img.src = image;
});

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
let timeLeft = 60;
let timer = null;
let gameStarted = false;
let gameOver = false;

// Store whether a card has already been matched
const matched = new Array(cards.length).fill(false);

// Show card image
function showImage(card, index) {
    const cardFront = card.querySelector(".card-front");
    cardFront.style.backgroundImage = `url("${memory[index]}")`;
    card.style.transform = "rotateY(180deg)";
}


// Hide card image
function hideImage(card) {
    card.style.transform = "rotateY(0deg)";
}


// Start timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerBoard.textContent = `Timeleft: ${timeLeft} s`;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}


// End game
function endGame() {
    gameOver = true;
    lockBoard = true;
    clearInterval(timer);
    setTimeout(() => {
        alert(
            `⏰ Time's up!\n` +
            `Final Score: ${score}`
        );
    }, 100);
}


// Card click event
cards.forEach((card, index) => {
    card.addEventListener("click", () => {

        // Don't allow clicks after game ends
        if (gameOver) return;

        // Don't allow clicking while checking mismatch
        if (lockBoard) return;

        // Don't allow clicking matched cards
        if (matched[index]) return;

        // Don't allow clicking the same card twice
        if (card === firstCard) return;

        // Start timer on first move
        if (!gameStarted) {
            gameStarted = true;
            startTimer();
        }
        // Show selected card
        showImage(card, index);

        // First card
        if (firstCard === null) {
            firstCard = card;
            firstIndex = index;
        }

        // Second card
        else {
            secondCard = card;
            secondIndex = index;
            checkMatch();
        }
    });
});


// Check whether two cards match
function checkMatch() {
    if (memory[firstIndex] === memory[secondIndex]) {

        // Mark cards as matched
        matched[firstIndex] = true;
        matched[secondIndex] = true;

        // Increase score
        score++;
        scoreBoard.textContent = `Score: ${score}`;


        // Check whether all pairs are matched
        if (score === baseImages.length) {
            gameOver = true;
            clearInterval(timer);
            setTimeout(() => {
                alert(
                    `🎉 Congratulations!\n` +
                    `You matched all the cards!\n` +
                    `Final Score: ${score}\n` +
                    `Time Remaining: ${timeLeft} s`
                );
            }, 600);
        }
        resetTurn();
    }
    else {
        lockBoard = true;
        setTimeout(() => {
            hideImage(firstCard);
            hideImage(secondCard);
            resetTurn();
        }, 1000);
    }
}

// Reset current turn
function resetTurn() {
    firstCard = null;
    secondCard = null
    firstIndex = null;
    secondIndex = null;
    lockBoard = false;
}
let deferredPrompt;

const installBanner = document.getElementById("install-banner");
const installButton = document.getElementById("install-button");

installBanner.style.display = "none";

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();

    deferredPrompt = event;

    installBanner.style.display = "block";
});

installButton.addEventListener("click", async () => {
    if (!deferredPrompt) {
        return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    console.log(`Install prompt result: ${outcome}`);

    deferredPrompt = null;

    installBanner.style.display = "none";
});

window.addEventListener("appinstalled", () => {
    console.log("Memory Game installed!");

    installBanner.style.display = "none";
});
const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

if (isFirefox && !window.matchMedia("(display-mode: standalone)").matches) {
    installBanner.style.display = "block";
    installButton.style.display = "none";
    document.getElementById("firefox-install").style.display = "block";
}