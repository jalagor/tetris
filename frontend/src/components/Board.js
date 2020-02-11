import React from 'react'

export const Board = ({tetrominos})=> {

    const makeGrid = () => {
        const array =  [...Array(160).keys()]
        return array.map(number => {
            return <div id={number}></div>
        })
     }

     console.log(tetrominos)
    return (
        <div className="board-container">
            <div className="board">
                {makeGrid()}
            </div>
        </div>
    )
}
