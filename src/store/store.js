import weightsReducer from '../reducers/weight_reducer';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed

});

const configureStore = (preloadedState = {}) => 
  createStore(
    weightsReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk, logger))
    )
  

export default configureStore;