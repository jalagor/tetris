import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/NavBar'
import {Board} from './components/Board'
import {tetrominos, randomTetromino, move, startBoard} from './components/tetrominos'

class App extends Component {
  state = {

    startBoard: Array(16).fill(Array(10).fill(['Q',"clear"])), 
    playBoard: [],
    piece:{
      position: {x: 4, y: 0},
      tetromino: tetrominos.Z.shape, 
      collided: false
    },
    newPosition: [],
    playing: false
  }
 
  movePiece = (e) => {
    const move = {
        ArrowRight : ()=> this.updatePiecePosition(1, 0),
        ArrowLeft : () => this.updatePiecePosition(-1, 0),
        ArrowDown : () => this.updatePiecePosition(0, 1),
        ArrowUp : () => this.flipPiece(this.state.piece.tetromino),
        default : () => null
    }
    return !move[e.key] ? move.default : move[e.key]() 
  } 

  flipPiece = (matrix) => {
    
   const flipped = matrix[0].map((column, index) => {
     return matrix.map(row => row[index])
    })
    this.setState({
      piece: { 
        position: {x: this.state.piece.position.x, y: this.state.piece.position.y },
        tetromino: flipped.reverse()
      }
    })
  }

  updatePiecePosition = (newX, newY) => {
    this.setState({
      ...startBoard,
      piece: {
        position: {x: (this.state.piece.position.x += newX), y: (this.state.piece.position.y += newY)},
        tetromino: this.state.piece.tetromino
       
      }
    })
  }

  setPlayBoard=(newBoard)=>{
    this.setState({playBoard: newBoard})
  }
  
 
 
  
  render(){
    return (
      <div className="App" role="button" tabIndex="0" onKeyDown={e => this.movePiece(e)}>
        <Navbar/>
        <Board 
          tetrominos={this.state.pieces} 
          piece={this.state.piece} 
          board={this.state.startBoard}
          playBoard={this.state.playBoard}
          setPlayBoard={this.setPlayBoard}

        />

      </div>
    );
  }
}

export default App;
