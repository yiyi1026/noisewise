import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route , HashRouter } from 'react-router-dom';
import NoiseMain from './noise/noisemain.jsx';
import WeightWatcherContainer from './components/weights/weight_watcher_container.jsx';
import TodoListContainer from './components/todos/todo_list_container.jsx';
// import ErrorBoundary from './components/error_boundary';
// import Test from './noise/test';

//drag feature, wrap root component
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

class App extends Component{

  render(){
    return (
      <DragDropContextProvider backend={HTML5Backend}>
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
      </DragDropContextProvider>
    );
  };
}

export default App;