//constant
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';

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

// export const requestAllTodos = () => dispatch => (
//   APIUtil.utilFetchAllTodos()
//   .then(
//     todos => {
//       return dispatch(receiveAllTodos(todos))}
//     // , errors => dispatch(receiveErrors(errors))
//   )
// );

// export const requestSingleTodo = id => dispatch => (
//   APIUtil.utilFetchSingleTodo(id)
//   .then(
//     todo => dispatch(receiveSingleTodo(todo))
//     // ,errors => dispatch(receiveErrors(errors))
//   )
// );

// export const createTodo = todo => dispatch => (
//   APIUtil.utilCreateTodo(todo)
//   .then(
//     todo => {
//       dispatch(receiveSingleTodo(todo));
//       dispatch(clearErrors())},
//     errors => {
//       return dispatch(receiveErrors(errors.request.responseText));}
//   )
// );

// export const updateTodo = todo => dispatch => (
//   APIUtil.utilUpdateTodo(todo)
//   .then(
//     todo => dispatch(receiveSingleTodo(todo)),
//     errors => dispatch(receiveErrors(errors))
//   )
// );

// export const deleteTodo = todo => dispatch => (
//   APIUtil.utilDeleteTodo(todo)
//   .then(
//     todo => dispatch(removeTodo(todo))
//   )
// );

// export const searchTodos = query => dispatch => (
//   APIUtil.utilSearchTodos(query)
//   .then(todos =>
//     dispatch(receiveSearchedTodos(todos))
//   )
// );
