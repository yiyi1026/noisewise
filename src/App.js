import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Range from 'react-range';
import Sound from './sound';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   let audio= new Audio("15-Dryer-10min.mp3")
  //   audio.volume = 0.2
  //   this.state = {
  //     audio,
  //     toggle: false,
  //     volume: 0.2
  //   };
  // }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      <Sound name="15-Dryer-10min.mp3"/>
     {/* <Sound name="20-Fan-10min.mp3"/>
     <Sound name="25-Ocean-10min.mp3"/> */}
      </div>
    );
  }
}

export default App;
