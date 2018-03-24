import React, { Component } from 'react';
import './App.css';
import NoiseMain from './noise/noisemain.jsx';
import { Link } from 'react-router-dom';
// import Test from './noise/test';
import WeightWatcherContainer from './components/weights/weight_watcher_container.jsx';
import TodoListContainer from './components/todos/todo_list_container.jsx';
import ErrorBoundary from './components/error_boundary';
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
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/weights" component={WeightWatcherContainer}/>
        <Route exact path="/noise" component={NoiseMain}/>
        <Route exact path="/todos" component={TodoListContainer}/>
      </Switch>
      </div>
  );
};

export default App;
