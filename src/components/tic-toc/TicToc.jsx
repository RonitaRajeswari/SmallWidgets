import React, { useState } from 'react';
import Square from './Square';
import './Tictoc.css';

function TicToc() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null); // Track the winner

  const handleClick = (index) => {
    if (state[index] !== null || winner) return; // Don't allow moves if game is over or square is filled

    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);

    const currentWinner = checkWinner(copyState);
    if (currentWinner) {
      setWinner(currentWinner);
    } else if (copyState.every(val => val !== null)) {
      alert('Draw! Play again');
      handleReset();
    }
  };

  const checkWinner = (squares) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner (either 'X' or 'O')
      }
    }
    return null;
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  return (
    <div>
      <h1 className='font-mono text-2xl hover:font-medium font-black'>Let's play Tic-Tac-Toe</h1>
      {winner ? (
        <h2 className='text-xl font-bold text-green-600'>{`Player ${winner} wins!`}</h2>
      ) : (
        <h2 className='text-xl font-bold'>{`Player ${isXTurn ? 'X' : 'O'}'s turn`}</h2>
      )}
      <div className='board flex flex-col items-center py-10'>
        <div className='board-row'>
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className='board-row'>
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className='board-row'>
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>
      <button
        onClick={handleReset}
        className='bg-white/30 rounded-lg p-2 text-lg border border-gray-200 shadow-lg max-w-sm mx-auto hover:bg-white font-semibold'
      >
        {winner ? 'Play Again' : 'Reset'}
      </button>
    </div>
  );
}

export default TicToc;
