import { useEffect, useState } from "react";

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

const emptyBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameMode, setGameMode] = useState("computer");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    draws: 0,
  });

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return {
          winner: newBoard[a],
          cells: pattern,
        };
      }
    }

    return null;
  };

  const updateGameStatus = (newBoard, nextPlayer) => {
    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result.winner);
      setWinningCells(result.cells);

      setScores((previousScores) => ({
        ...previousScores,
        [result.winner]: previousScores[result.winner] + 1,
      }));

      return;
    }

    if (newBoard.every((cell) => cell !== null)) {
      setIsDraw(true);

      setScores((previousScores) => ({
        ...previousScores,
        draws: previousScores.draws + 1,
      }));

      return;
    }

    setCurrentPlayer(nextPlayer);
  };

  const getComputerMove = (newBoard) => {
    const availableMoves = newBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    // Try to win
    for (let move of availableMoves) {
      const testBoard = [...newBoard];
      testBoard[move] = "O";

      if (checkWinner(testBoard)?.winner === "O") {
        return move;
      }
    }

    // Block user
    for (let move of availableMoves) {
      const testBoard = [...newBoard];
      testBoard[move] = "X";

      if (checkWinner(testBoard)?.winner === "X") {
        return move;
      }
    }

    // Take center
    if (newBoard[4] === null) {
      return 4;
    }

    // Take corner
    const corners = [0, 2, 6, 8].filter((index) => newBoard[index] === null);

    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }

    // Random remaining move
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const handleCellClick = (index) => {
    if (board[index] || winner || isDraw) return;
    if (gameMode === "computer" && currentPlayer === "O") return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    updateGameStatus(newBoard, nextPlayer);
  };

  useEffect(() => {
    if (gameMode !== "computer") return;
    if (currentPlayer !== "O") return;
    if (winner || isDraw) return;

    const timer = setTimeout(() => {
      const move = getComputerMove(board);

      if (move === undefined) return;

      const newBoard = [...board];
      newBoard[move] = "O";

      setBoard(newBoard);
      updateGameStatus(newBoard, "X");
    }, 600);

    return () => clearTimeout(timer);
  }, [currentPlayer, board, gameMode, winner, isDraw]);

  const resetGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells([]);
    setIsDraw(false);
  };

  const resetScores = () => {
    setScores({
      X: 0,
      O: 0,
      draws: 0,
    });

    resetGame();
  };

  const changeMode = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  const statusText = winner
    ? gameMode === "computer" && winner === "O"
      ? "Computer Wins!"
      : `Player ${winner} Wins!`
    : isDraw
    ? "Game Draw!"
    : gameMode === "computer" && currentPlayer === "O"
    ? "Computer is thinking..."
    : `Player ${currentPlayer}'s Turn`;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom,#9333ea55,transparent_35%)]"></div>

      <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl"></div>

      <section className="relative z-10 w-full max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            SkillCraft Technology
          </p>

          <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Tic Tac Toe
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 md:text-base">
            Play against your friend or challenge the computer in a modern,
            responsive, and interactive Tic-Tac-Toe web application.
          </p>
        </div>

        <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 grid grid-cols-2 gap-3">
            <button
              onClick={() => changeMode("player")}
              className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                gameMode === "player"
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Player vs Player
            </button>

            <button
              onClick={() => changeMode("computer")}
              className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                gameMode === "computer"
                  ? "bg-purple-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Player vs Computer
            </button>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center">
              <p className="text-xs font-bold uppercase text-cyan-300">
                Player X
              </p>
              <p className="text-2xl font-black">{scores.X}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center">
              <p className="text-xs font-bold uppercase text-purple-300">
                Player O
              </p>
              <p className="text-2xl font-black">{scores.O}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center">
              <p className="text-xs font-bold uppercase text-slate-300">
                Draws
              </p>
              <p className="text-2xl font-black">{scores.draws}</p>
            </div>
          </div>

          <div className="mb-5 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-center">
            <p className="text-lg font-black">{statusText}</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                className={`flex aspect-square items-center justify-center rounded-3xl border text-5xl font-black transition duration-300 ${
                  winningCells.includes(index)
                    ? "border-emerald-300 bg-emerald-400/30 text-emerald-200 shadow-[0_0_35px_rgba(52,211,153,0.5)]"
                    : "border-white/10 bg-white/10 hover:scale-105 hover:bg-white/20"
                } ${
                  cell === "X"
                    ? "text-cyan-300"
                    : cell === "O"
                    ? "text-purple-300"
                    : "text-white"
                }`}
              >
                {cell}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              onClick={resetGame}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 px-5 py-3 font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Reset Game
            </button>

            <button
              onClick={resetScores}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-black text-white transition hover:scale-[1.02] hover:bg-white/20"
            >
              Reset Scores
            </button>
          </div>

          <p className="mt-5 text-center text-xs font-semibold text-slate-400">
            Built by A.J.Pardhiv · SCT WD Task 03
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;