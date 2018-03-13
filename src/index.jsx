import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {

  const preloadedState = localStorage.state ?
  JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  // registerServiceWorker();
  ReactDOM.render(
    <HashRouter><App /></HashRouter>, 
    document.getElementById('root'));
});
