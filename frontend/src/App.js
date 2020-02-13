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
      tetromino: tetrominos.I.shape, 
      collided: false
    },
    newPosition: [],
    playing: false
  }
 
  movePiece = (direction) => {
    console.log('direction', direction)
    this.updatePiecePosition(direction, 0)

  } 

  updatePiecePosition = (newX, newY) => {
    this.setState({
      ...startBoard,
      piece: {
        position: {x: (this.state.piece.position.x += newX), y: (this.state.piece.position.y += newY)},
        tetromino: this.state.piece.tetromino
       
      }
    })
    console.log("new POS", this.state)
  }

  setPlayBoard=(newBoard)=>{
    this.setState({playBoard: newBoard})
    
    // console.log("hit the board", this.state.playBoard)

  }
  
  // move = (e) => {
  //   console.log(e.key)
  //   e.key === 'ArrowRight' ? this.movePiece(1) : 

  // }

 
  
  render(){

    return (
      <div className="App" role="button" tabIndex="0" onKeyDown={e => this.movePiece(move[(e.key)])}>
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
