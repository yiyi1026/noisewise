import React, { Component } from 'react';
// import './App.css';
import NoiseMain from './noise/noisemain.jsx';
// import Test from './noise/test';
import WeightWatcherContainer from './components/weights/weightwatcher_container.jsx';

import { Switch, Route , HashRouter} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/weights" component={WeightWatcherContainer}/>
        <Route path="/noise" component={NoiseMain}/>
      </Switch>
      </div>
  );
};

export default App;
