import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//reducers
// import weightsReducer from '../reducers/weights_reducer';
import rootReducer from '../reducers/root_reducer';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed

});

const configureStore = (preloadedState = {}) => {
  const store = 
    createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk, logger)
    )
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  })

  return store;
}
  

export default configureStore;