import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/NavBar'
import {Board} from './components/Board'
import tetrominos from './components/tetrominos'

class App extends Component {
  state = {
    pieces: tetrominos,
    board: Array(16).fill(Array(10).fill(['Q',"clear"])), 
    updateBoard: [],
    piece:{
      position: {x: 3, y: 0},
      tetromino: tetrominos.Z.shape, 
      collided: false
    },
    newPosition: []
  }

  updatePlayerPosition = (newX, newY, newCollided) => {
    this.setState({
      piece: {
        position: {x:(this.state.piece.position.x += newX), y:(this.state.piece.position.y += newY)},
        collided: newCollided
      }
    })
  }
  
 
  
  render(){

    return (
      <div className="App">
        <Navbar/>
        <Board tetrominos={this.state.pieces} updatePiece={ this.updatePlayerPosition} piece={this.state.piece} board={this.state.board}/>
        

    
      </div>
    );
  }
}

export default App;
