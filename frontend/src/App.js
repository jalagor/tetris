import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/NavBar'
import {Board} from './components/Board'
import tetrominos from './components/tetrominos'

class App extends Component {
  state = {
    pieces: tetrominos
  }

 
  
  render(){

    return (
      <div className="App">
        <Navbar/>
        <Board tetrominos={this.state.pieces}/>

    
      </div>
    );
  }
}

export default App;
