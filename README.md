# SCT_WD_3 - Tic-Tac-Toe Web Application

A modern, responsive, and interactive **Tic-Tac-Toe Web Application** built as part of **SkillCraft Technology Web Development Task 03**.

This project allows users to play Tic-Tac-Toe either against another player or against the computer. It includes clean game logic, real-time turn tracking, winner detection, draw detection, a score counter, and a polished responsive UI.

---

## GitHub Repository

```text
https://github.com/itzPardhiv/SCT_WD_3
```

---

## Project Overview

The goal of this project is to build a fully functional Tic-Tac-Toe game using React-based state management and modern frontend development practices.

The application handles user interactions, tracks the complete game state, checks for winning conditions after every move, detects draws, and provides a smooth gameplay experience for both Player vs Player and Player vs Computer modes.

---

## Features

* Player vs Player mode
* Player vs Computer mode
* Interactive 3x3 Tic-Tac-Toe board
* Real-time turn tracking
* Automatic winner detection
* Draw detection
* Winning cell highlight
* Score counter for Player X, Player O, and Draws
* Reset current game functionality
* Reset scores functionality
* Responsive design for desktop and mobile
* Modern glassmorphism-style user interface
* Smooth hover effects and visual feedback

---

## Tech Stack

* React.js
* Vite
* JavaScript
* Tailwind CSS
* HTML5
* CSS3

---

## Game Logic

The game uses React state to manage:

* Board values
* Current player
* Selected game mode
* Winner state
* Winning cells
* Draw status
* Score counter

After every move, the application checks all possible winning combinations:

* Horizontal rows
* Vertical columns
* Diagonal lines

In Player vs Computer mode, the computer follows a simple strategy:

1. Try to win if possible
2. Block the player from winning
3. Choose the center cell
4. Choose an available corner
5. Pick a random available cell

This makes the computer gameplay more intelligent than a fully random move system.

---

## Folder Structure

```text
SCT_WD_3/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/itzPardhiv/SCT_WD_3.git
```

### 2. Navigate to the project folder

```bash
cd SCT_WD_3
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local server

Open the link shown in your terminal, usually:

```text
http://localhost:5173/
```

---

## Usage

1. Select a game mode:

   * Player vs Player
   * Player vs Computer

2. Click on any empty cell to make a move.

3. The game automatically checks for:

   * Winner
   * Draw
   * Next player turn

4. Use **Reset Game** to restart the current round.

5. Use **Reset Scores** to clear the scoreboard.

---

## Key React Concepts Used

* Functional components
* React Hooks

  * useState
  * useEffect
* Conditional rendering
* Event handling
* Array mapping
* Game state management

---

## Learning Outcomes

Through this project, I practiced:

* Building interactive React applications
* Managing game state efficiently
* Handling user clicks and events
* Implementing conditional logic
* Checking winning conditions programmatically
* Creating responsive layouts
* Designing a polished UI using Tailwind CSS
* Structuring a project professionally for GitHub submission

---

## Task Details

**Task Name:** Tic-Tac-Toe Web Application
**Task Number:** SCT WD Task 03
**Domain:** Web Development
**Organization:** SkillCraft Technology
**Intern ID:** SCT/MAY26/6745

---

## Author

**A.J. Pardhiv**

* GitHub: [itzPardhiv](https://github.com/itzPardhiv)
* Project Repository: [SCT_WD_3](https://github.com/itzPardhiv/SCT_WD_3)

---

## Footer Credit

Built by **A.J. Pardhiv** · **SCT WD Task 03**
