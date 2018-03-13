import React, { Component } from 'react';
// import './App.css';
import NoiseMain from './noise/noisemain.jsx';
// import Test from './noise/test';
import WeightWatcher from './weights/weight_watcher.jsx';
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
          <Route path="/weights" component={WeightWatcher}/>
          <Route path="/noise" component={NoiseMain}/>
        </Switch>
        </div>
    );
  }
}

export default App;
