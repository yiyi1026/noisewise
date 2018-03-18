import React, { Component } from 'react';
import './App.css';
import NoiseMain from './noise/noisemain.jsx';
import { Link } from 'react-router-dom';
// import Test from './noise/test';
import WeightWatcherContainer from './components/weights/weightwatcher_container.jsx';

import { Switch, Route , HashRouter} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">NoiseWise</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/noise">NoiseWise</Link></li>
            <li><Link to="/weights">Weight Watcher</Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/weights" component={WeightWatcherContainer}/>
        <Route exact path="/noise" component={NoiseMain}/>
      </Switch>
      </div>
  );
};

export default App;
