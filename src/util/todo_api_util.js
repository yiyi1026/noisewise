export const utilFetchSingleTodo = id => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${id}`
  })
);

export const utilFetchAllTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
)

export const utilCreateTodo = todo => {
  console.log('hi');
  return (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
)};

export const utilUpdateTodo = todo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: todo
  })
);

export const utilDeleteTodo = todo => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`
  })
);
