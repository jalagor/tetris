import React, {useEffect} from 'react'
import {Piece} from './Piece'
import {Cell} from './Cell'
import {startBoard} from './tetrominos'

export const Board = ({tetrominos, piece, board, playBoard, setPlayBoard, updatePlayBoard})=> {

    const makeGrid = () => {
        setTimeout(setPlayBoard(board), 10000)
        
        return startBoard.map(array => {
            return array.map(cell=>{
                return <Cell id={cell[0]}/>
            })
        })

    }

    const updateGrid = (oldBoard) => {
       var newBoard = [...oldBoard]
       var mycoordinates = []
        
       if(piece.collided){
            piece.tetromino.forEach((row, y) => {
                row.forEach((cell, x) => {
                    
                    if (cell !== 'Q') {
                        var currentRow = (y + piece.position.y)
                        var currentCell = (x + piece.position.x)
                        console.log('cell', currentCell)
                        console.log('row', currentRow)
                        var xy = {first: currentRow, second: currentCell, third: [cell, 'merged']}
                        mycoordinates.push(xy)
                    
                    
                    
                    // updatePlayBoard( newBoard[currentRow][currentCell] = [cell, 'merged'] )
                    // return newBoard[currentRow][currentCell] = [cell, 'merged']
                }
                 
            });
        })
        // coordinates.map(location=>{
        //     console.log('fuck you you piece of shit', newBoard[0][1])
        //     return newBoard[location.first][location.second] = [location.third]

        // })
        function stepTwo(coordinates) {
            console.log('Step Two', newBoard);
            for(var j =0; j < coordinates.length; j ++) {
                newBoard[coordinates[j].first][coordinates[j].second] = coordinates[j].third;
            }
            for(var i = 0; i < newBoard.length; i++) {
                console.log(newBoard[i].join(' '));
            }
            return newBoard

        }
        stepTwo(mycoordinates)
        // [currentRow][currentCell] = [cell, 'merged']
        updatePlayBoard(newBoard)
        debugger
        }
       
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
