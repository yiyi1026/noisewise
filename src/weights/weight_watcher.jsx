import React, { Component } from 'react';
import './weight_watcher.css';

class WeightWatcher extends Component {
  constructor(props){
    super(props);

    this.state = {
      muted: false,
    };
    
  }

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
        weight
      </div>
    );
  }
}

export default WeightWatcher;
