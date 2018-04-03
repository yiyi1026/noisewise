//transform objects to array
export const allTodos = (todos) => (todos.allIds.map(id => todos.byId[id]));
