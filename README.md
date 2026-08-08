# 🧠 Memory Game

A browser-based memory card matching game built using **HTML, CSS, and JavaScript**.

The objective is to find all matching pairs by flipping two cards at a time. The game tracks the player's score and provides a final result when all pairs are matched or the time limit expires.

## 🎮 Live Demo

[▶️ Play Memory Game](https://memorygame-web.netlify.app/)

## 🎥 Demo

https://github.com/user-attachments/assets/0539d746-c223-4a4c-a526-8b4401f7b4f9

The demo shows the card flipping animation, matching cards, score tracking, timer, and game interaction.

## ✨ Features

- 4 × 4 card grid
- 8 matching image pairs
- Randomized card positions on every game
- CSS 3D card flip animation
- Match detection
- Score tracking
- Matched cards remain visible
- Mismatched cards automatically flip back
- Prevents interaction while mismatched cards are being checked
- Image preloading for smoother first-time card flips
- 60-second time limit
- Timer starts when the player makes the first move
- Game ends when the timer reaches zero
- Game completion alert
- Responsive layout using CSS Grid

## 🛠️ Technologies Used

- **HTML5** — Structure of the game
- **CSS3** — Styling, responsive layout, and 3D card flip animation
- **JavaScript** — Game logic, card shuffling, matching, scoring, and timer

## 📂 Project Structure

```text
memory-game/
├── assets/
│   ├── coding.png
│   ├── demo.webm
│   ├── favicon.png
│   ├── gmail-logo.png
│   ├── html_icon.png
│   ├── linkedin-logo.png
│   ├── logo.png
│   ├── nature.png
│   ├── paper-present.png
│   ├── project-expo.png
│   └── youtube.png
├── index.html
├── game-logic.js
├── main.css
└── README.md
```

## 🚀 Future Improvements

- Add difficulty levels such as **Easy, Medium, and Hard**
- Add sound effects and background music
- Add a restart/new game button
- Add a high-score system
- Add different card themes