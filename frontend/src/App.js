import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/NavBar'
import {Board} from './components/Board'
import {StartButton} from './components/StartButton'
import {tetrominos, randomTetromino, checkCollision, startBoard} from './components/tetrominos'

class App extends Component {
  state = {

    startBoard: Array(16).fill(Array(10).fill(['Q',"clear"])), 
    playBoard: [],
    piece:{
      position: {x: 4, y: 0},
      tetromino: tetrominos.Z.shape, 
      collided: false
    },
    playing: false
  }


 
  movePiece = (e) => {
    const {piece, playBoard} = this.state
    const move = {

        ArrowRight : () => !checkCollision(piece, playBoard, {x:1, y: 0}) 
          ? this.updatePiecePosition(1, 0) 
          : null,
        
        ArrowLeft : () => !checkCollision(piece, playBoard, {x:-1, y: 1}) 
          ? this.updatePiecePosition(-1, 0) 
          : null,

        // ArrowDown : () => !checkCollision(piece, playBoard, {x:0, y: 1}) 
        //   ? this.updatePiecePosition(0, 1) 
        //   : null,
        
        ArrowUp : () => !checkCollision(piece, playBoard, {x:-1, y: 1}) ? this.flipPiece(piece.tetromino) : null,
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
        tetromino: flipped.reverse(),
        collided: false
      }
    })
  }

  dropPiece = () => {
    const {piece, playBoard, board} = this.state
   
    
    setTimeout( () => !checkCollision(piece, playBoard, {x:0, y: 1}) 
    ? this.updatePiecePosition(0, 1) : this.catchCollision(), 400)
    setTimeout(() => this.endofgrid(), 400) 
  }
  endofgrid =() => {
    const {piece, playBoard} = this.state
    !checkCollision(piece, playBoard, {x:0, y: 1})? this.dropPiece() : this.catchCollision()

  }

  catchCollision = () => {
    // const { piece, playBoard} = this.state
    
    this.setState({
      piece: {
        position: this.state.piece.position,
        tetromino: this.state.piece.tetromino,
        collided: true
      }
    })
    console.log(this.state.piece)
    this.newPiece()   
  }

  newPiece = ()=> {
    this.setState({
      piece:{
        position: {x:4, y:0},
        tetromino: randomTetromino().shape,
        collided: false
      }
    })
    this.dropPiece()
  }
  updatePiecePosition = (newX, newY, newCollided) => {

    this.setState({
      piece: {
        position: {x: (this.state.piece.position.x += newX), y: (this.state.piece.position.y += newY)},
        tetromino: this.state.piece.tetromino,
        collided: newCollided
      }
    })
    
  }

  setPlayBoard=(newBoard)=>{
    this.setState({playBoard: newBoard})
  }

  updatePlayBoard = (someBoard) =>{
    console.log(this.state)
    debugger
    this.setState({
      playBoard: someBoard,
      piece:{
        position: {x:4, y:0},
        tetromino: randomTetromino().shape,
        collided: false
      }
    })
    console.log(this.state)
    debugger
  }
  componentDidUpdate(){
   
  }
 
 
  
  render(){
    return (
      <div className="App" role="button" tabIndex="0" onKeyDown={e => this.movePiece(e)}>
        <Navbar/>
        <Board 
          updatePlayBoard ={this.updatePlayBoard}
          tetrominos={this.state.pieces} 
          piece={this.state.piece} 
          board={this.state.startBoard}
          playBoard={this.state.playBoard}
          setPlayBoard={this.setPlayBoard}

        />
        <aside>
          <StartButton dropPiece ={this.dropPiece}/>
        </aside>

      </div>
    );
  }
}

export default App;
