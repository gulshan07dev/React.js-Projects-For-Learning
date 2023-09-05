import React, { useState } from "react";
import Card from "../components/card/Card";
import winnerSvg from "../assets/happy-dance.gif";

export default function TikTakToe() {
  const [board, setBoard] = useState(Array.from({ length: 9 }).fill(""));
  const [turn, setTurn] = useState(true); // true for "X", false for "O"
  const [winner, setWinner] = useState(null);

  // function to check winner
  const checkWinner = (board) => {
    // Define winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== "")) {
      return "Draw";
    }

    return null;
  };

  // function for handle card click
  const handleCardClick = (index) => {
    if (board[index] || winner) return;

    // Create a new board array with the updated value
    const newBoard = [...board];
    newBoard[index] = turn ? "X" : "O";

    setBoard(newBoard);
    setTurn((prevTurn) => !prevTurn);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    }
  };

  //   function for handle reset game
  const handleReset = () => {
    setTurn(true);
    setWinner(null);
    setBoard(Array.from({ length: 9 }).fill(""));
  };

  let player = turn ? "X" : "O";

  return (
    <main className="py-7 px-2 md:px-16 flex md:justify-around md:pt-28 md:gap-0 pt-5 md:flex-row md:items-start items-center justify-start gap-12 flex-col min-h-[80vh]">
      {/* game info */}
      <div className="flex flex-col gap-6">
        <h1 className="md:text-4xl text-2xl text-violet-500 font-semibold underline-offset-[10px] underline md:pb-2 pb-6">
          Welcome to my{" "}
          <span className="font-bold text-violet-600">Tic Tac Toe!</span>
        </h1>
        {/* show current player */}
        {!winner && (
          <h2 className="text-2xl p-5 custom-shadow text-gray-800 font-semibold font-sans">
            Player: <span className="bold text-green-500">{player}</span>
          </h2>
        )}
        {/* Winner or Draw message */}
        {winner && (
          <div className="flex flex-col gap-5 bg-none">
            <h2 className="text-2xl p-5 custom-shadow text-green-600 font-semibold font-sans">
              {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`}{" "}
              {winner !== "Draw" && <span>🎉</span>}
            </h2>
            {winner === "Draw" ? (
              <span className="text-7xl self-center mt-4 animate-ping">😎</span>
            ) : (
              <img
                src={winnerSvg}
                alt="winner"
                className="w-[30%] self-center "
              />
            )}
          </div>
        )}
      </div>
      {/* main game */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-0 h-fit md:w-fit max-w-[600px]">
          {board.map((el, idx) => (
            <Card player={el} onPlay={handleCardClick} index={idx} key={idx} />
          ))}
        </div>
        {/* show restart button if winner */}
        {winner && (
          <button
            className="p-4 bg-[#ff2c2c] rounded-md text-base font-semibold hover:opacity-70 text-white animate-bounce"
            onClick={handleReset}
          >
            Restart
          </button>
        )}
      </div>
    </main>
  );
}
