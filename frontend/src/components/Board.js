import React from 'react'

export const Board = ({tetrominos})=> {

    const makeGrid = () => {
        
        const matrix = Array(16).fill(Array(10).fill(0))
        console.log(matrix)

        return matrix.map(array => {
            return array.map(cell=>{
               return <div className="cell" value={cell}></div>
           })
        })
     }

    return (
        <div className="board-container">
            <div className="board">
                {makeGrid()}
            </div>
        </div>
    )
}
