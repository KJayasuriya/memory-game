
# 🃏 Memory Game

A browser-based memory matching game built with **HTML, CSS, and JavaScript**, now upgraded into an installable **Progressive Web App (PWA)** with offline support.

🎮 **Live Demo:** https://memorygame-web.netlify.app/

---

## 🎮 About

Memory Game is a 4 × 4 card-matching game where the player flips two cards at a time and tries to find all matching pairs.

The game includes score tracking, a 60-second time limit, randomized cards, responsive design, and a Progressive Web App experience.

The PWA version can be installed on supported platforms and played **without an internet connection** after the required resources have been cached.

---

## ✨ Features

### 🎯 Gameplay

- 4 × 4 memory card grid
- 8 matching pairs
- Randomized card positions on every game
- 3D card-flip animation
- Match detection
- Score tracking
- 60-second countdown timer
- Prevents interaction while mismatched cards are being checked
- Matched cards remain visible
- Game-over and completion messages

### 📱 Progressive Web App

- Installable as a desktop/mobile web app on supported platforms
- Works offline after the initial visit
- Service Worker-based asset caching
- Versioned cache management
- Automatic removal of outdated caches
- PWA manifest and application icons
- Standalone application display
- Responsive mobile layout
- Install button for browsers supporting the PWA installation prompt

### 🌐 Browser Support

The game works as a normal website in modern browsers.

| Feature | Chromium | Firefox |
|---|:---:|:---:|
| Game | ✅ | ✅ |
| Responsive UI | ✅ | ✅ |
| Offline gameplay | ✅ | ✅ |
| Service Worker | ✅ | ✅ |
| PWA installation | ✅ | ⚠️ Platform dependent |

> Firefox supports the game's offline functionality through Service Workers, while PWA installation availability depends on the platform and browser version.

---

## 🛠️ Technologies

- **HTML5**
- **CSS3**
- **JavaScript**
- **Progressive Web App (PWA)**
- **Service Worker**
- **Web App Manifest**
- **Netlify**
- **Git & GitHub**

---

## 📂 Project Structure

```text
memory-game/
├── assets/
│   ├── cat.svg
│   ├── dog.svg
│   ├── fox.svg
│   ├── frog.svg
│   ├── koala.svg
│   ├── lion.svg
│   ├── panda.svg
│   ├── penguin.svg
│   ├── favicon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── demo.webm
│
├── game-logic.js
├── index.html
├── main.css
├── manifest.json
├── sw.js
└── README.md
````

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/KJayasuriya/memory-game.git
cd memory-game
```

Start a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

> The project should be served through HTTP/HTTPS because Service Workers do not work with `file://`.

---
## 📱 Installing the PWA

On a supported browser:

1. Open the live website.
2. Use the browser's **Install App** option when available.
3. Accept the installation prompt.
4. Launch Memory Game from your applications menu.

The installed application can be played offline after its resources have been cached.
---

## 📴 Offline Support

The Service Worker caches the files required by the game, including:

* HTML
* CSS
* JavaScript
* Web App Manifest
* Application icons
* Card images

After these resources have been cached, the game can continue working without an internet connection.

---

## 🎥 Demo

A gameplay recording is included in:

https://github.com/user-attachments/assets/fe3163a6-575b-441e-b103-9e25c943431d

---

## 🔮 Future Improvements

* Difficulty levels
* Sound effects
* Best-score persistence
* Leaderboard
* Additional card themes
* More game modes
* Improved accessibility

---

## 📜 Release History

### v2.0.0 — Progressive Web App

* Added Progressive Web App support
* Added Service Worker
* Added offline gameplay
* Added Web App Manifest
* Added PWA application icons
* Added installable application experience
* Added responsive mobile layout
* Added browser installation prompt
* Added versioned cache management
* Improved Service Worker update handling

### v1.0.0 — Initial Release

* Created the browser-based Memory Game
* Added 4 × 4 card grid
* Added 8 matching pairs
* Added randomized card placement
* Added 3D card-flip animation
* Added score tracking
* Added 60-second timer
* Added responsive layout

---

## 👨‍💻 Author

### K. Jayasuriya

GitHub: [https://github.com/KJayasuriya](https://github.com/KJayasuriya)

---

## 📄 License

This project is available for educational and personal use.


