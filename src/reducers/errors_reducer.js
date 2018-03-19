import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions.js';

// Sample State Shape
// [
//   "Weight cannot be blank",
// ]

const errorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      // console.log(action.errors.split(','));
      return JSON.parse(action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;