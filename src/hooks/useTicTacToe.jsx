import { useState } from "react";

const getBlocks = () => Array(9).fill(null);

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const useTicTacToe = () => {
  const [blocks, setBlocks] = useState(getBlocks());
  const [isXNext, setIsXNext] = useState(true);
  const [message, setMessage] = useState(null);

  const calculateWinner = (block) => {
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
        if (block[a] === block[b] && block[b] === block[c]) {
        return block[a]
      }
    }
    return null;
  };

  const onBlockClick = (index) => {
    const updatedBlocks = [...blocks];
    if (!updatedBlocks[index]) {
        updatedBlocks[index] = isXNext ? "X" : "0";
        setBlocks(updatedBlocks);
        
        const winner = calculateWinner(updatedBlocks)
        if (winner) {
            setMessage(`${winner} is the Winner!!!`)
        } else {
            setMessage(`${isXNext ? '0' : 'X'}'s turn now`)
            setIsXNext(!isXNext);
            
        }
    }
    };
    
    const handleReset = () => {
        setBlocks(getBlocks())
        setMessage(null);
        setIsXNext(true)
    }

  return { onBlockClick, blocks, message, handleReset };
};

export default useTicTacToe;
