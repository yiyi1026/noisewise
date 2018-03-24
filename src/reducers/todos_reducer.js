import merge from 'lodash/merge';
import {combineReducers} from 'redux';
import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO
} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const byIdReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  // console.log(action);
  switch (action.type){
    case RECEIVE_TODOS:
      return merge({}, nextState, action.todos);
      // return action.todos;
    case RECEIVE_TODO:
      console.log(action.todo);
      return merge({}, nextState, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
}

const allIdsReducer = (state=[], action) => {
  Object.freeze(state);
  let allIds = merge([], state);

  switch (action.type){
    case RECEIVE_TODOS:
      Object.keys(action.todos).map(id => {
          const intId = parseInt(id);
          if (!allIds.includes(intId)){
            allIds.push(intId);
          }
          return allIds;
        }
      )

    case RECEIVE_TODO:
      let id = action.todo.id;
      if (!allIds.includes(id)){
        return [...state, id]
      }else {
        return allIds;
      }
    case REMOVE_TODO:
      delete allIds[action.todo.id];
      return allIds;
    default:
      return state;
  }
}

const todosReducer = combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer
})

export default todosReducer;