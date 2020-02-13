import React, {useEffect} from 'react'
import {Piece} from './Piece'
import {Cell} from './Cell'
import {startBoard} from './tetrominos'

export const Board = ({tetrominos, piece, board, playBoard, setPlayBoard})=> {

    const makeGrid = () => {
        setTimeout(setPlayBoard(board), 10000)
        
        return startBoard.map(array => {
            return array.map(cell=>{
                return <Cell id={cell[0]}/>
            })
        })

    }

    const updateGrid = (oldBoard) => {
        const newGrid = oldBoard.map(row=> { 
           return row.map(cell => {
                return <Cell id= {(cell[1] === 'clear' ? 'Q' : cell[0])}/>
                
            })
        })
        
        piece.tetromino.forEach((row, y) => {

            row.forEach((cell, x) => {
              if (cell !== 'Q') {
                newGrid[y + piece.position.y][x + piece.position.x] = <Cell id={cell}/>
              }
            });
        })
        return newGrid
    }
        
    
    
       
        
        

    


    return (
        <div className="board-container">
            <div className="board">

                {playBoard[1] ? updateGrid(playBoard) :makeGrid(board)}
            </div>
        </div>
    )
}
