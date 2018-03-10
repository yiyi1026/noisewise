import React, { Component } from 'react';
import './App.css';
import NoiseMain from './noise/noisemain';
// import Test from './noise/test';
import { Switch, Route , HashRouter} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/noise" component={Test}/> */}
          <Route path="/noise" component={NoiseMain}/>
        </Switch>
        </div>
    );
  }
}

export default App;
