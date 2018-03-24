import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors';
import {
  receiveTodo, 
  receiveTodos
} from '../../actions/todo_actions';


const mapStateToProps = ({todos}) => {
  // console.log(todos);
  return {
    // todos: allTodos({todos}),
    byId: todos.byId,
    allIds: todos.allIds
  }
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  // receiveTodos: () => dispatch(receiveTodos())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
