import { combineReducers } from 'redux';

import weightsReducer from './weights_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  weights: weightsReducer,
  errors: errorsReducer
 });

export default rootReducer;