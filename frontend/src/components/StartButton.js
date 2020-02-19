import React from 'react'

export const StartButton = ({dropPiece})=> {
    const handleClick= () => {
        
        dropPiece()
    }
    return (
        <button className="start" onClick={handleClick}>Start Game</button>
    )
}
