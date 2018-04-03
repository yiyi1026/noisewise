import * as APIUtil from '../util/todo_api_util';
//constant
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';

import { receiveErrors, clearErrors } from './error_actions';

//action creator
export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
})

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
})

export const removeTodo = todo => ({
  type:REMOVE_TODO,
  todo
})

export const requestAllTodos = () => dispatch => (
  APIUtil.utilFetchAllTodos()
  .then(
    todos => {return dispatch(receiveTodos(todos))}, 
    errors => dispatch(receiveErrors(errors))
  )
);

// export const requestSingleTodo = id => dispatch => (
//   APIUtil.utilFetchSingleTodo(id)
//   .then(
//     todo => dispatch(receiveSingleTodo(todo))
//     // ,errors => dispatch(receiveErrors(errors))
//   )
// );

export const createTodo = todo => dispatch => {
  console.log('create');
  return (
  APIUtil.utilCreateTodo(todo)
  .then(
    todo => {
      dispatch(receiveTodo(todo));
      dispatch(clearErrors())},
    errors => {
      console.log(errors);
      return dispatch(receiveErrors(errors.responseText));}
  )
)};

export const updateTodo = todo => dispatch => (
  APIUtil.utilUpdateTodo(todo)
  .then(
    todo => dispatch(receiveSingleTodo(todo)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deleteTodo = todo => dispatch => (
  APIUtil.utilDeleteTodo(todo)
  .then(
    todo => dispatch(removeTodo(todo))
    )
);

// export const searchTodos = query => dispatch => (
//   APIUtil.utilSearchTodos(query)
//   .then(todos =>
//     dispatch(receiveSearchedTodos(todos))
//   )
// );
