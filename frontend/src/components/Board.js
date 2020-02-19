import React, {useState, useEffect} from 'react'
// import {Piece} from './Piece'
import {Cell} from './Cell'
import {startBoard} from './tetrominos'

export const Board = ({tetrominos, piece, board, playBoard, setPlayBoard, updatePlayBoard})=> {


    const [waffle, setWaffle] = useState(startBoard)
    const [mycoordinates, setMycoordinates] = useState([])
    // console.log(waffle)
    
    
    
    const makeGrid = () => {
        setTimeout(setPlayBoard(board), 10000)
        
        return startBoard.map(array => {
            return array.map(cell=>{
                return <Cell id={cell[0]}/>
            })
        })

    }


    // const recordCoordinates = () => { 
    //     var coords = []
    //     piece.tetromino.forEach((row, y) => {
    //         row.forEach((cell, x) => {
    //             if (cell !== 'Q') {
    //                 var currentRow = (y + piece.position.y)
    //                 var currentCell = (x + piece.position.x)
    //                 var xy = {first: currentRow, second: currentCell, third: [cell, 'merged']}
    //                 coords.push(xy)
    //             }
    //         });
    //     })
    //     setMycoordinates([coords])
    // }

    // const pieceOnBoard = () => {
    //    return piece.collided ? recordCoordinates() : null 
    // }


    const newWaffle = () => {
        var theNewMatrix = [ ...waffle]
        mycoordinates.map(coords=>{
            theNewMatrix[coords.first][coords.second] = coords.third
        })
        setWaffle(theNewMatrix)
    }

    
    const updateGrid = (oldBoard) => {
        
        const newGrid = oldBoard.map(row=> { 
           return row.map((cell, x) => {
                return <Cell key = {x}  id= {(cell[1] === 'clear' ? 'Q' : cell[0])}/> 
            })
        })
        

        piece.tetromino.forEach((row, y) => {
            row.forEach((cell, x) => {
              if (cell !== 'Q') {
                // console.log(cell)  
                
                newGrid[y + piece.position.y][x + piece.position.x] = <Cell id={cell}/>
              }
            });
        })
        return newGrid
    }
        
    
    
       
        
        

    


    return (
        <div className="board-container">
            <div className="board">

                {playBoard[1] ? updateGrid(playBoard) : makeGrid(board)}

            </div>
        </div>
    )
}
