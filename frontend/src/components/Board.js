import React, {useEffect} from 'react'
import {Piece} from './Piece'
import {Cell} from './Cell'

export const Board = ({tetrominos, piece, board})=> {

    const makeGrid = (matrix) => {
        return matrix.map(array => {
            return array.map(cell=>{
               return <Cell id={cell[0]}/>
           })
        })
       return piece.tetromino.map( row=>{
            return row.map( box => {
                return <Cell id={box[0]}/>

            })
        })
    }

    const updateGrid = () => {
        const newGrid = board.map(row=> { 
           return row.map(cell => {
               console.log(cell)
                return <Cell id= {(cell[1] === 'clear' ? cell[0] : cell[0])}/>
            })
        })

        piece.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 'Q') {
                newGrid[y + piece.position.y][x + piece.position.x] = <Cell id={value}/>
              }
            });
        })

        return newGrid
    }
        
    
    
       
        
        

    


    return (
        <div className="board-container">
            <div className="board">
                {updateGrid()}
            </div>
        </div>
    )
}
