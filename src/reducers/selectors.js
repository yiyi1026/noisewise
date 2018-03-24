//transform objects to array
export const allTodos = ({todos}) => (Object.keys(todos).map(id => todos[id]));
