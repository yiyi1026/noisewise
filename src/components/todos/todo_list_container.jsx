import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors';
import {
  createTodo,
  receiveTodo, 
  receiveTodos,
  requestAllTodos,
  deleteTodo
} from '../../actions/todo_actions';


const mapStateToProps = (state) => {
  return {
    todos: allTodos(state.todos),
    errors: state.errors
    // ,
    // byId: todos.byId,
    // allIds: todos.allIds
  }
};

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveTodos: () => dispatch(requestAllTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(deleteTodo(todo))
  // receiveTodos: () => dispatch(receiveTodos())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
