import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {

  const preloadedState = localStorage.state ?
  JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  // console.log('hi');
  // console.log(store);
  // registerServiceWorker();
  ReactDOM.render(
    <Root store={store}/>, document.getElementById('root'));
});
