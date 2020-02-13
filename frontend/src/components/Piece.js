import React from 'react'

export const Piece = ({tetrominos}) => {
    console.log(tetrominos.L.shape)
    const renderPiece = ()=>{
        return tetrominos.L.shape.map(row => {
            return row.map(cell => {
                return <div id={`${cell}`}></div>
            })
        })
    }
    
    return (
        <>
            {renderPiece()}
        </>
    )
}
