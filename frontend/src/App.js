import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/NavBar'
import {Board} from './components/Board'

class App extends Component {

  render(){

    return (
      <div className="App">
        <Navbar/>
        <Board/>

    
      </div>
    );
  }
}

export default App;
