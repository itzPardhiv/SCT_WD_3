# GameGrid — Premium Tic-Tac-Toe Web Application

![SkillCraft](https://img.shields.io/badge/SkillCraft-Technology-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge\&logo=tailwindcss\&logoColor=white)

A premium, modern, and interactive **Tic-Tac-Toe web application** built with **React, Vite, JavaScript, and Tailwind CSS**.

---

## Overview

**GameGrid** is a fully functional Tic-Tac-Toe web application built as part of the **SkillCraft Technology Web Development Internship — Task 03**.

The project focuses on implementing core game logic using React state management while maintaining a clean, responsive, and visually polished user interface. The application allows users to play either against another player or against the computer.

Instead of building a basic Tic-Tac-Toe board, GameGrid is designed with a premium dark glassmorphism interface, glowing gradients, smooth hover effects, winning cell highlights, score tracking, and an engaging gameplay experience.

---

## Internship Details

| Field           | Details                     |
| --------------- | --------------------------- |
| Internship      | SkillCraft Technology       |
| Track           | Web Development             |
| Track Code      | WD                          |
| Task Number     | Task 03                     |
| Task Name       | Tic-Tac-Toe Web Application |
| Repository Name | SCT_WD_3                    |
| Intern ID       | SCT/MAY26/6745              |
| Project Name    | GameGrid                    |

---

## Project Objective

The objective of this task was to build an interactive Tic-Tac-Toe web application that demonstrates:

* User click handling
* Game state tracking
* Turn-based gameplay
* Winning condition detection
* Draw condition detection
* Player vs Player mode
* Player vs Computer mode
* Score counting
* Responsive frontend design

GameGrid fulfills these requirements through a React-based game interface with real-time updates, intelligent computer moves, and a professional user experience.

---

## Features

### Player vs Player Mode

Users can play Tic-Tac-Toe against another player on the same device.

The game alternates turns between:

* Player X
* Player O

---

### Player vs Computer Mode

Users can challenge the computer in an interactive single-player mode.

The computer follows a simple decision-making strategy:

1. Try to win if possible
2. Block the player from winning
3. Choose the center cell
4. Choose an available corner
5. Pick a random available cell

This makes the computer more competitive than a purely random opponent.

---

### Game State Management

The application tracks the complete game state using React state.

The game manages:

* Board values
* Current player
* Selected game mode
* Winner state
* Winning cells
* Draw status
* Score counter

---

### Winning Condition Detection

After every move, the application checks all possible winning combinations.

Winning combinations include:

* Horizontal rows
* Vertical columns
* Diagonal lines

When a player wins, the winning cells are highlighted visually.

---

### Score Counter

GameGrid includes a built-in score counter that tracks:

| Score Type | Description                           |
| ---------- | ------------------------------------- |
| Player X   | Number of rounds won by X             |
| Player O   | Number of rounds won by O or Computer |
| Draws      | Number of drawn rounds                |

Users can reset the current game or reset the entire scoreboard.

---

### Responsive Premium UI

The application is designed with a clean and modern interface.

UI highlights include:

* Dark glassmorphism layout
* Gradient background effects
* Glowing buttons
* Smooth hover animations
* Responsive board sizing
* Mobile-friendly layout
* Winning cell glow effect

---

## Tech Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| React.js     | Frontend UI and component logic |
| Vite         | Fast development and build tool |
| JavaScript   | Game logic and interactivity    |
| Tailwind CSS | Styling and responsive design   |
| HTML5        | Application structure           |
| CSS3         | Base styling and layout support |

---

## Game Logic

The Tic-Tac-Toe board is represented as an array of 9 cells.

```javascript
const emptyBoard = Array(9).fill(null);
```

Each cell can contain:

```text
X
O
null
```

The application checks winning patterns after every move.

```javascript
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
```

If a winning pattern is found, the winner is declared and the winning cells are highlighted.

If all cells are filled and no winner exists, the game declares a draw.

---

## Keyboard and Interaction

The game is mainly controlled through mouse clicks or touch input.

Each cell responds to user clicks and updates the board instantly. The application prevents invalid moves such as:

* Clicking an already filled cell
* Playing after the game is over
* Playing during the computer's turn

---

## Folder Structure

```text
SCT_WD_3/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
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

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/itzPardhiv/SCT_WD_3.git
```

### 2. Navigate to the Project Folder

```bash
cd SCT_WD_3
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open the local server URL shown in the terminal.

```text
http://localhost:5173/
```

---

## Usage

1. Open the application in the browser.
2. Choose a game mode:

   * Player vs Player
   * Player vs Computer
3. Click on an empty cell to make a move.
4. The game automatically switches turns.
5. The winner or draw result is displayed after the round ends.
6. Use **Reset Game** to restart the current round.
7. Use **Reset Scores** to clear the scoreboard.

---

## Key React Concepts Used

* Functional components
* React Hooks

  * `useState`
  * `useEffect`
* Conditional rendering
* Event handling
* Array mapping
* State-driven UI updates
* Game state management
* Component-based application structure

---

## Learning Outcomes

Through this project, I practiced and improved my understanding of:

* Building interactive React applications
* Managing state with React Hooks
* Handling user click events
* Implementing game logic
* Checking winning conditions programmatically
* Creating a computer opponent
* Managing score counters
* Designing responsive layouts
* Building a polished UI with Tailwind CSS
* Structuring a project professionally for GitHub submission

---

## Project Status

The project is completed and ready for submission.

| Requirement             | Status    |
| ----------------------- | --------- |
| Interactive board       | Completed |
| User click handling     | Completed |
| Game state tracking     | Completed |
| Winner detection        | Completed |
| Draw detection          | Completed |
| Player vs Player mode   | Completed |
| Player vs Computer mode | Completed |
| Score counter           | Completed |
| Responsive UI           | Completed |
| GitHub repository       | Completed |

---

## Repository

```text
https://github.com/itzPardhiv/SCT_WD_3
```

---

## Author

**A.J. Pardhiv**

| Platform   | Link                                               |
| ---------- | -------------------------------------------------- |
| GitHub     | [itzPardhiv](https://github.com/itzPardhiv)        |
| Repository | [SCT_WD_3](https://github.com/itzPardhiv/SCT_WD_3) |

---

## Acknowledgement

This project was developed as part of the **SkillCraft Technology Web Development Internship**.

---

## Footer Credit

Built by **A.J. Pardhiv** · **SCT WD Task 03**
