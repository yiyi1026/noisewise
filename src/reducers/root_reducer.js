import { combineReducers } from 'redux';

import weightsReducer from './weights_reducer';
import todosReducer from './todos_reducer'
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  weights: weightsReducer,
  todos: todosReducer,
  errors: errorsReducer
 });

export default rootReducer;