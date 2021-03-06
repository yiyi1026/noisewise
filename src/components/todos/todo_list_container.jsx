import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors';
import {
  createTodo,
  requestAllTodos,
  requestSingleTodo,
  updateTodo,
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
  requestAllTodos: () => dispatch(requestAllTodos()),
  receiveTodo: (todo) => dispatch(requestSingleTodo(todo)),
  updateTodo:(todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
