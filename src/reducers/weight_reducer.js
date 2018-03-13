import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_SINGLE_WEIGHT,
  RECEIVE_ALL_WEIGHTS,
  REMOVE_WEIGHT,
  RECEIVE_SEARCHED_WEIGHTS
} from '../actions/weight_actions';

const defaultState =
{
  byId: {},
  allIds: [],
  // searchIds: [],
  errors: []
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_WEIGHT:
      return merge({}, nextState, {[action.weight.id]: action.weight});
    case RECEIVE_ALL_WEIGHTS:
      return merge({}, nextState, action.weights);
    case REMOVE_WEIGHT:
      delete nextState[action.weight.id];
      return nextState;
    default:
      return state;
  }
}

const allIdsReducer = (state=[], action) => {
  Object.freeze(state);

  let allIds = merge([], state);
  switch (action.type) {
    case RECEIVE_ALL_WEIGHTS:
      Object.keys(action.weights).forEach(id => {
        const initId = parseInt(id);
        if (!allIds.includes(intId)){
          allIds.push(intId);
        }
      return allIds;
      })
    case RECEIVE_SINGLE_WEIGHT:
      let id = action.weight.id;
      if (allIds.includes(id)){
        return state;
      }else {
        return [...state, id]
      }
    default:
      return state;
  }
}

const weightsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  // currentQuestion: weightReducer,
  // searchIds: searchIdsReducer
});
export default weightsReducer;