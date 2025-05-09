import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

export default function Blocks() {

    const { blocks , onBlockClick, message, handleReset } = useTicTacToe();

  return (
    <>
      <div className='blocks'>
      {blocks.map((b, index) => <div className={ `block ${b ? 'cursor-default': 'cursor-pointer'}`}  key={index} onClick={() => onBlockClick(index)} >
            {b}
          </div>)}
      </div>

      <div className="result">
        <div className='message'>{ message}</div>        
        <button onClick={handleReset}>Reset</button>
      </div>
      </>
  )
}
