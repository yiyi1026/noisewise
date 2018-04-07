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
  allIds: []
  // searchIds: [],
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_WEIGHT:
      return merge({}, nextState, {[action.weight.data.id]: action.weight.data});
    case RECEIVE_ALL_WEIGHTS:
      return merge({}, nextState, action.weights.data);
    case REMOVE_WEIGHT:
      delete nextState[action.weight.data.id];
      return nextState;
    default:
      return state;
  }
}

const allIdsReducer = (state=[], action) => {
  Object.freeze(state);

  let allIds = merge([], state);
  // console.log(action.weights.data);

  switch (action.type) {
    case RECEIVE_ALL_WEIGHTS:
      Object.keys(action.weights.data).forEach(id => {
        const intId = parseInt(id);
        if (!allIds.includes(intId)){
          allIds.push(intId);
        }
      })
      return allIds;
    case RECEIVE_SINGLE_WEIGHT:
      // console.log(action.weight.data);
      let id = action.weight.data.id;
      if (allIds.includes(id)){
        return allIds;
      }else {
        return [...state, id]
      }
    case REMOVE_WEIGHT:
      let idx = allIds.indexOf(action.weight.data.id);
      allIds.splice(idx, 1);
      return allIds;
    default:
      return state;
  }
}

const weightsReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  // searchIds: searchIdsReducer
});
export default weightsReducer;