import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';

//test
import {receiveTodos, receiveTodo} from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {

  const preloadedState = localStorage.state ?
  JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // registerServiceWorker();
  
  // test only
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(
    <Root store={store}/>, document.getElementById('root'));
});
