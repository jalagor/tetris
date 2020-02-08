import React from 'react'

export const Board = ()=> {

    const makeGrid = () => {
        const array =  [...Array(160).keys()]
        console.log(array)
        return array.map(number => {
            return (<div>{number}</div>)
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
